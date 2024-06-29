package dev.tadyboii.wordle.backend.table.score

import dev.tadyboii.wordle.backend.table.user.UserProfile
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import java.util.*

class ScoreRecord(id: EntityID<UUID>) : UUIDEntity(id) {
    companion object : UUIDEntityClass<ScoreRecord>(ScoreRecords)

    var user by UserProfile referencedOn ScoreRecords.userId
    var score by ScoreRecords.score
    var words by ScoreRecords.words
    var createdAt by ScoreRecords.createdAt
}


