import { Clock } from './clock';

export class GMGame {
    public gameId: string;
    public whitePlayer = {
        "playerId" : "",
        "playerPoint" : 1000,
        "sessionId" : ""
    }
    public blackPlayer = {
        "playerId" : "",
        "playerPoint" : 1000,
        "sessionId" : ""
    }
    public initialClockTime:Clock = new Clock(0,0,0);
}