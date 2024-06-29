package dev.tadyboii.wordle.backend.service

import dev.tadyboii.wordle.backend.model.UserDTO
import dev.tadyboii.wordle.backend.repository.UserRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class UserService(private val userRepository: UserRepository) {
    fun getUsers(): List<UserDTO>{
        return userRepository.getUsers()
    }

    fun getUserByEmail(email: String): UserDTO? {
        return userRepository.getUserByEmail(email)
    }

    fun createUser(userDTO: UserDTO): UserDTO? {
        return userRepository.createUser(userDTO)
    }

    fun updateUser(userDTO: UserDTO): UserDTO? {
        return userRepository.updateUser(userDTO)
    }

    fun getUser(id: UUID): UserDTO {
        return userRepository.getUser(id)
    }
}