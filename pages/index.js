import Head from 'next/head'
import cookies from "next-cookies"
import useRouter from "next/router"

import EditableContainer from '../components/editableContainer'
import Countdown from '../components/countdown'
import EditableHeadline from '../components/editableHeadline'

export default function Home({ data }) {
  const router = useRouter
  const primaryFire = data.fires.primaryFire 
  const secondaryFire = data.fires.secondaryFire 
  const dumpsterFire = data.fires.dumpsterFire

  const primaryTitle = data.fires.primaryTitle
  const secondaryTitle = data.fires.secondaryTitle
  const dumpsterTitle = data.fires.dumpsterTitle

  const userId = data.fires.user

  // const primaryFire = [
  //   {
  //     id: "5f54d75b114c6d176d7e9765",
  //     html: "First Task",
  //     shot: true,
  //   },
  //   {
  //     id: "5f54d75b114c6d176d7e9766",
  //     html: "Second Task",
  //     shot: true,
  //   },
  //   {
  //     id: "5f54d75b114c6d176d7e9767",
  //     html: "Third Task",
  //     shot: false,
  //   },
  // ]
  //
  const handleLogoutButton = () => {
    router.push('/logout')
  }

  return (
    <div className="container">
      <Head>
        <title>FireList</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="header">
        <div className="headerItem">
          <img className="fireLogo"src="../../logoSmall.svg"/>
        </div>
        <div className="headerItem"> <Countdown /> </div>
        <div className="headerItem">
          <button className="btnLight" onClick={handleLogoutButton}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="lock">
                <rect id="Rectangle 2" x="5" y="11" width="14" height="10" rx="1" stroke="#050733" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Rectangle 2_2" d="M7 8C7 5.23858 9.23858 3 12 3V3C14.7614 3 17 5.23858 17 8V11H7V8Z" stroke="#050733" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div className="burnerList">
        <div className="firstRow">
          <div className="card primaryCard">
            <p className="tool" data-tip="Focus Topic. This is most important. That's why it gets half the page. Go edit the page and add the topic followed by ToDo Items for that topic">main fire</p>
            <EditableHeadline fireType={"primaryFire"} fetchedTitle={primaryTitle} userId={userId}/>
            <EditableContainer fireType={"primaryFire"} fetchedBlocks={primaryFire} userId={userId}/>
          </div>
        </div>

        <div className="secondRow">
          <div className="card secondaryCard cardtopright">
            <p className="tool" data-tip="Also important topic. But not full focus. That's why this gets a quarter page.">secondary fire</p>
            <EditableHeadline fireType={"secondaryFire"} fetchedTitle={secondaryTitle} userId={userId}/>
            <EditableContainer fireType={"secondaryFire"} fetchedBlocks={secondaryFire} userId={userId}/>
          </div>

          <div className="card secondaryCard cardbottomright" >
            <p className="tool" data-tip="Busy work. Things that are maybe urgent but not important. And not FOCUS. That's why they are on the bottom right quarter.">dumpster fire</p>
            <EditableHeadline fireType={"dumpsterFire"} fetchedTitle={dumpsterTitle} userId={userId}/>
            <EditableContainer fireType={"dumpsterFire"} fetchedBlocks={dumpsterFire} userId={userId}/>
          </div>
        </div>
      </div>
      <footer>
        <p> Hope you could add some focus to your day with <span className="colorfire">FireList!  🔥 </span>
          Created by  <a className="linky" href="https://twitter.com/nikoatwork"> @nikoatwork </a></p>
      </footer>

      <style jsx>{`
        .colorfire, .linky {
          color: #e55039;
        }
        .container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin: 0 auto;
          height: 1000px;
        }

        .header {
          width: 100%;
          min-height: 80px;
          height: 5vh;
          display: flex;
          align-items: center;
          margin-top: 10px;
          justify-content: space-between;
          border-bottom: 1px solid #828282;
        }

        .headerItem {
          flex-grow: 1;
          margin: 0 auto;
        }
        .headerItem + .headerItem {
        }
        .headerItem:nth-child(3n-1) {
          display: flex;
          justify-content: center;
        }

        .headerItem:nth-child(3n) {
          display: flex;
          justify-content: right;
        }

        .burnerList {
          width: 100%;
          height: 90vh;
          display: flex;
          margin-top: 15px;
        }


        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          justify-content: center;
          color: #828282;
          font-size: 12px;
          padding: 1rem;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

       .primaryCard {
          text-align: left;
          color: inherit;
          text-decoration: none;
          padding-top: 5px;
        }


        .secondaryCard {
          text-align: left;
          color: inherit;
          text-decoration: none;
          padding: 5px 0 0 5px;
        }

        .firstRow {
          flex-basis: 50%;
          border-right: 1px solid #828282;
        }

        .secondRow {
          flex-basis: 50%;
        }

        .cardtopright {
          height: 50%;
          border-bottom: 1px solid #828282;
        }

        .card h3 {
          margin: 5px 5px 5px 0;
          font-size: 24px;
          font-weight: 700;
        }

        .card p {
          margin: 0;
          font-size: 12px;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }

      `}</style>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap');
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Rubik, sans-serif;
        }

        * {
          box-sizing: border-box;
        }

       .btnLight {
         border: none;
         height: 48px;
         width: 48px;
         background-color: transparent;
       }

       .CountdownDisplay {
         font-size: 12px;
         display: flex;
         align-items: center;
       }
        .editableContainer {
          padding-left: 20px;
        }


      `}</style>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const { token } = cookies(context)
  const res = context.res
  const req = context.req

  if(!token) {
    console.log("not token")
    res.writeHead(302, { Location: `/login`})
    res.end()
  }

  try {
    const response = await fetch(`${process.env.SERVER_URL}/fires?userId=${token}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: req ? req.headers.cookie : undefined,
      },
    })
    console.log("fetched this stuff")
    const data = await response.json()
    console.log(data)
    if (!data) {
      return { notFound: true }
    }
    return { props: { data } }
  } catch (err) {
    console.log(err)
    return { props: {
      "data": {
        "fires": {
          "_id": null,
          "primaryTitle": null,
          "primaryFire": null,
          "secondaryTitle":null,
          "secondaryFire": null,
          "dumpsterTitle": null,
          "dumpsterFire": null,
          "user": null,}
      }
    }
    }
  }
}
