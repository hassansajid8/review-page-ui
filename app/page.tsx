import StarRating from "./components/StarRating";
import ThumbsUpDown from "./components/ThumbsUpDown";
import Checkbox from "./components/Checkbox";

export default function Home() {
  return (
    <main className="md:p-24">
      <div className="md:border p-3">
      <img src="/xmark.svg" className="w-8" alt="" />
      <h1 className="text-4xl">Leave a review</h1>

      <div className="main mt-12">

        <div className="section">
          <h2 className="text-2xl">Safety</h2>
          <p className="text-sm text-slate-400">How safe did you feel with Trausti?</p>
          <StarRating />
        </div>

        <hr />

        <div className="section">
          <h2 className="text-2xl">Communication</h2>
          <p className="text-sm text-slate-400">How easy was it to communicate with Trausti?</p>
          <StarRating />
        </div>

        <hr />

        <div className="section">
          <h2 className="text-2xl">Would you reccomend Trausti?</h2>
          <p className="text-sm text-slate-400">Your opinion won't be posted publicly</p>
          <ThumbsUpDown />
        </div>

        <hr />

        <div className="section">
          <h2 className="text-2xl">Praise</h2>
          <p className="text-sm text-slate-400">What traits best describe Trausti?</p>
          <div className="mt-5">
          <Checkbox title="Adventurous" />
          <Checkbox title="Clean" />
          <Checkbox title="Good listener" />
          <Checkbox title="Honest" />
          <Checkbox title="Humorous" />
          <Checkbox title="Inspiring" />
          <Checkbox title="Kind" />
          <Checkbox title="Knowledgable" />
          <Checkbox title="Non-judgemental" />
          <Checkbox title="Spontaneous" />
          <Checkbox title="Talkative" />
          <Checkbox title="Thoughtfull" />
          <Checkbox title="Trustworthy" />
          </div>
        </div>

        <hr />

        <div className="section">
          <h2 className="text-2xl">Care to share more?</h2>
          <p className="text-sm text-slate-400">How was your overall experience? What's that one thing you won't forget Trausti for?</p>
          <textarea className="border w-full rounded border-slate-400 p-3" placeholder="Come on, you know the drill..."/>
        </div>

        <div className="flex w-full justify-center items-center">
        <button className="w-full rounded py-3 font-bold my-5 max-w-[425px]">PUBLISH REVIEW</button>
        </div>

      </div>
      </div>
    </main>
  );
}
