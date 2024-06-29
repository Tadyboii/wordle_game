package dev.tadyboii.wordle.backend.model

import dev.tadyboii.wordle.backend.table.score.ScoreRecord
import dev.tadyboii.wordle.backend.table.user.UserProfile
import java.time.Instant
import java.util.UUID

fun ScoreRecord.toDTO() = ScoreRecordDTO(
    id = id.value,
    user = user.toDTO(),
    score = score,
    words = words.split(","),
    createdAt = createdAt
)

fun ScoreRecordDTO.createEntity(id: UUID) = ScoreRecord.new {
    val scoreRecordDTO = this@createEntity
    user = UserProfile.findById(id)!!
    score = scoreRecordDTO.score
    words = scoreRecordDTO.words.joinToString(",")
    createdAt = Instant.now()
}