import ReactAudioPlayer from "react-audio-player";

export const HistoryRock = () => {
  return (
    <div className="componentTemplate flex center col gap">
      <p>History of Rock</p>
      <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls />
      <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls />
      <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls />
      <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls />
    </div>
  );
};
