package dev.tadyboii.wordle.backend.model

import java.time.Instant
import java.util.UUID

data class ScoreRecordDTO(
    val id: UUID?,
    val user: UserDTO?,
    val score: Int,
    val words: List<String>,
    val createdAt: Instant?
)