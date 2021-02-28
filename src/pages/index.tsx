import Head from 'next/head'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
      </Head>

      <div className="container px-4">
        <div className="input-group input-group-lg mb-3 mt-5">
          <input type="text" className="rounded-md py-1 px-3 form-control" placeholder="Busque um anime" />
          <div className="input-group-append">
            <button type="button" className="btn btn-search"> &nbsp; <i className="fa fa-search"></i> &nbsp;</button>
          </div>
        </div>
        <br />
      </div>
    </div>
  )
}
