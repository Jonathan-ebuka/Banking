import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar"
import TotalBalanceBox from "@/components/TotalBalanceBox"
import React from "react"

const Home = () => {
  const loggedIn = {
    firstName: "Jonathan",
    lastName: "Okwudili",
    email: "okwudiliebuka405@gmail.com",
  }

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || "Guest"}
            subtext='Access and manage your account and transactions efficiently'
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={12564}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 1246.5 }, { currentBalance: 563.43 }]}
      />
    </section>
  )
}

export default Home
