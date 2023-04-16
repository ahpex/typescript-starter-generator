import winston from "winston";

/**
 * A logger based on winston.
 */
export default winston.createLogger({
    level: "info",
    format: winston.format.simple(),
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.padLevels(),
                winston.format.splat(),
                winston.format.simple(),
            ),
        }),
    ],
});
