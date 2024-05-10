export function Card ({ chr, dictionary }: { chr: string, dictionary: any }) {
  if (chr.toUpperCase() in dictionary) {
    return (
      <div className="card">
        <span className="card-alpha">
          {chr.toUpperCase()}
        </span>
        <span className="card-word">
          {dictionary[chr.toUpperCase()]}
        </span>
      </div>
    );
  } else {
    return <div className="card"></div>;
  }
}

