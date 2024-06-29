package dev.tadyboii.wordle.backend.repository

import dev.tadyboii.wordle.backend.model.UserDTO
import dev.tadyboii.wordle.backend.model.createEntity
import dev.tadyboii.wordle.backend.model.toDTO
import dev.tadyboii.wordle.backend.table.user.UserProfile
import dev.tadyboii.wordle.backend.table.user.UserProfiles
import org.jetbrains.exposed.sql.transactions.transaction
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
class UserRepository {
    fun getUsers(): List<UserDTO> {
        return transaction {
            UserProfile.all().map { it.toDTO() }
        }
    }

    fun getUserByEmail(email: String): UserDTO? {
        return transaction {
            UserProfile.find { UserProfiles.email eq email }.firstOrNull()?.toDTO()
        }
    }

    fun createUser(userDTO: UserDTO): UserDTO? {
        return transaction {
            if (UserProfile.find { UserProfiles.email eq userDTO.email }.empty()) {
                val user = userDTO.createEntity()
                user.toDTO()
            } else {
                null
            }
        }
    }

    fun updateUser(userDTO: UserDTO): UserDTO? {
        return transaction {
            UserProfile.findByIdAndUpdate(userDTO.id!!) {
                it.name = userDTO.name
                it.email = userDTO.email
                it.picture = userDTO.picture
                it.role = userDTO.role
            }?.toDTO()
        }
    }

    fun getUser(id: UUID): UserDTO {
        return transaction {
            UserProfile.findById(id)?.toDTO() ?: throw IllegalArgumentException("User not found")
        }
    }
}