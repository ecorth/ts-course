import {Coach} from "./Coach"

export class Powerlifting implements Coach{
  getDailyRoutine(): string{
    return "Do sumo competition 3x4 @7 plus x2 @7";
  }
}
