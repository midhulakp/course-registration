import React from 'react'

const HomePage = () => {
  return (
    <div>
        <main>
          <h1>Stack Up Your Skills, Level Up Your Career</h1>

          <p> Build a strong foundation in full stack development and amplify your skills. Advance your career with in-demand <br /> expertise and unlock new opportunities!</p>
          
          <div className='course'>

            <div className='courses' >
              <img src="https://imgs.search.brave.com/OXGw3p6f5RlPtGmmnGMmihJz0s02GNBeGOT4vyRhDig/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDg5MDQw/MTYuanBn" alt="" />
              <p className='name'>MERN STACK</p>
            </div>
            <div className='courses' >
              <img src="https://imgs.search.brave.com/3vD6pIf3JF-QFvH6R3Jcfq6rRmBFMu6b8spbpasJC_I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZWVrc2Zvcmdl/ZWtzLm9yZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMzA5MjYx/NjMzMzgvSmF2YS1G/dWxsLVN0YWNrLnBu/Zw" alt="" />
              <p className='name'>JAVA FULL STACK</p>
            </div>
            <div className='courses' >
              <img src="https://imgs.search.brave.com/iut8a1mpdrgzvKV1VtszV0Zg0ct1hs4U60dUfX6AV9A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kejJj/ZG4xLmR6b25lLmNv/bS9zdG9yYWdlL3Rl/bXAvMTM1MzA2MDUt/ZGV2b3BzLWZyb20t/ZWR1Y2F0aXZlLWNv/dXJzZS1kb2NrZXIt/Zm9yLWRldmVsb3Bl/cnMucG5n" alt="" />
              <p className='name'>DEVOPS</p>
            </div>

          </div>

        </main>
    </div>
  )
}

export default HomePage