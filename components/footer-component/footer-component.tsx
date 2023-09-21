export default function FooterComponent() {
  return (
    <footer className="text-slate-500">
      <div className="border-t py-3 text-center text-s">
        <p>
          Game data and images courtsey of &nbsp;
          <a href="https://rawg.io" target="_blank">
            <strong className="p-1 text-orange-800 hover:underline hover:bg-sky-950 hover:text-orange-50">
              RAWG
            </strong>
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
