package dev.tadyboii.wordle.backend.controller

import dev.tadyboii.wordle.backend.model.ScoreRecordDTO
import dev.tadyboii.wordle.backend.service.ScoreService
import org.springframework.web.bind.annotation.*
import java.util.*


@RestController
@RequestMapping("/wordle/scores")
class ScoreController(private val scoreService: ScoreService) {

    @GetMapping("/{id}")
    fun getPlayerScoreRecords(@PathVariable id: String): List<ScoreRecordDTO> {
        return scoreService.getPlayerScoreRecords(UUID.fromString(id))
    }

    @GetMapping
    fun getHighScores(): List<ScoreRecordDTO> {
        return scoreService.getHighScores()
    }

    @PostMapping("/{id}")
    fun createScoreRecord(
        @PathVariable id: String,
        @RequestBody scoreRecordDTO: ScoreRecordDTO
    ): ScoreRecordDTO {
        return scoreService.createScoreRecord(scoreRecordDTO, UUID.fromString(id))
    }

}