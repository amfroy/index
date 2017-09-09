function TennisGame() {
    const scoreString = ['Love', 'Fifteen', 'Thirty', 'Forthy']
    this.playerAScore = 0

    this.reset = () => {
        this.playerAScore = 0
    }

    this.echo = () => {
       return `${scoreString[this.playerAScore]} - Love`
    }

    this.playerAGteScore = () => {
        this.playerAScore++
    }
}

test('Echo "Love - Love" when game start', () => {
    // Arrange
    let app = new TennisGame()

    // Act
    app.reset()
    let result = app.echo()

    // Assert
    expect(result).toBe('Love - Love')
})

test('Echo "Love - Fifteen" when playerA get first score', () => {
    // Arrange
    let app = new TennisGame()
    app.reset()
    app.playerAGteScore()

    // Act
    let result = app.echo()

    // Assert
    expect(result).toBe('Love - Fifteen')
})
test('Echo "Fifteen - Love" when playerB get first score', () => {
    // Arrange
    let app = new TennisGame()
    app.reset()
    app.playerBGteScore()

    // Act
    let result = app.echo()

    // Assert
    expect(result).toBe('Fifteen - Love')
})
