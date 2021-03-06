// returns the length of time in milliseconds for a sixteenth note 
//(i.e. the smallest division in the beat machine - one square of time)
//I think the formula should be 60(seconds in a minute) * 1000 (1 second) = 60000ms in a minute / beats per minute
export default function useBPM(bpm) {
  return (60 * 1000 / 4) / bpm;
}