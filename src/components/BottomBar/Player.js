import { Icon } from "../../icons";
import { useAudio } from "react-use";
import { secondsToTime } from "../../utils";
import CustomRange from "../CustomRange";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setControls } from "../../stores/player";

function Player() {
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.player);
  const [audio, state, controls, ref] = useAudio({
    src: current?.src,
  });

  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted) return "volumeMuted";
    if (state.volume > 0 && state.volume < 0.33) return "volumeLow";
    if (state.volume >= 0.33 && state.volume < 0.66) return "volumeNormal";
    return "volumeFull";
  }, [state.volume, state.muted]);

  useEffect(() => {
    controls.play();
  }, [current]);

  useEffect(() => {
    dispatch(setControls(controls));
  }, []);

  return (
    <div className="flex px-4 justify-between items-center h-full">
      <div className="min-w-[11.25rem] w-[30%]">sol</div>
      <div className="max-w-[45.125rem] w-[40%] flex flex-col items-center">
        <div className="flex items-center gap-x-2">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="shuffle" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="playerPrev" />
          </button>
          <button
            onClick={controls[state?.playing ? "pause" : "play"]}
            className="w-8 h-8 bg-white flex items-center justify-center text-black rounded-full hover:scale-[1.06]"
          >
            <Icon size={16} name={state?.playing ? "play" : "pause"} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="playerNext" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="repeat" />
          </button>
        </div>
        <div className="w-full flex items-center gap-x-2">
          {audio}
          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.time)}
          </div>
          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => {
              controls.unmute();
              controls.seek(value);
            }}
          />
          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.duration)}
          </div>
        </div>
      </div>
      <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end">
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon size={16} name="lyrics" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon size={16} name="queue" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon size={16} name="device" />
        </button>
        <button
          onClick={controls[state.muted ? "unmute" : "mute"]}
          className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
        >
          <Icon size={16} name={volumeIcon} />
        </button>
        <div className="w-[5.813rem] max-w-full">
          <CustomRange
            step={0.01}
            min={0}
            max={1}
            value={state.muted ? 0 : state?.volume}
            onChange={(value) => controls.volume(value)}
          />
        </div>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon size={16} name="fullScreen" />
        </button>
      </div>
    </div>
  );
}
export default Player;
