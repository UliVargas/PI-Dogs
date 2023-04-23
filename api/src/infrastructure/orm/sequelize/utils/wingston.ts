import winston from 'winston'
import colors from 'colors'

const { createLogger, format, transports } = winston
const { combine, timestamp, printf } = format

interface ColorsByLevel {
  [key: string]: colors.Color
}

const colorsByLevel: ColorsByLevel = {
  error: colors.red,
  warn: colors.yellow,
  info: colors.blue
}

const myFormat = printf(({ level, message }) => {
  const colorizer = colorsByLevel[level] || colors.white
  const coloredMessage = colorizer(message)
  return `${level}: ${coloredMessage}`
})

export const logger = createLogger({
  format: combine(
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.Console()
  ]
})
