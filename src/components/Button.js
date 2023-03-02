export default function Button({ descButton = 'buttons' }) {
  return (
    <button className="bg-red-600 py-3 px-14 font-semibold text-sm">
      {descButton}
    </button>
  );
}
