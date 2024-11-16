import GoBackButton from './GoBackButton'

export default async function NotFound() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="flex flex-col justify-center items-center flex-wrap">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <GoBackButton />
      </div>
    </div>
  )
}