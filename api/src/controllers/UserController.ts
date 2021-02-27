import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UserRepository';
import * as yup from 'yup';

class UserController {
    async create(request: Request, response: Response) {
        const { name, email } = request.body;

        const schema = yup.object().shape({
            name: yup.string().required("O nome é obrigatório!"),
            email: yup.string().email().required("E-mail incorreto!")
        })

        try {
            await schema.validate(request.body, { abortEarly: false })
        } catch (err) {
            return response.status(400).json({err})
        }
        
        const usersRepository = getCustomRepository(UsersRepository);

        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if(userAlreadyExists) {
            return response.status(400).json({
                error: "O usuário já existe!"
            })
        }

        const user = usersRepository.create({
            name,
            email
        });

        await usersRepository.save(user);
        
        return response.status(201).json(user);
    }
}

export { UserController };
