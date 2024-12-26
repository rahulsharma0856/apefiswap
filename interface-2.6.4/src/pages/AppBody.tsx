import React from 'react'
import styled from 'styled-components'

export const BodyWrapper = styled.div`
  position: relative;
  max-width: 420px;
  width: 100%;
  background: ${({ theme }) => theme.bg1}; 
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 0px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04), 0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 30px;
  padding: 1rem;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  // return <BodyWrapper>{children}</BodyWrapper>
  return (
    <main>
      <section id="home" className="pt-[165px]">
          <div className="container max-w-[1390px]">
            {/* <div className="rounded-2xl bg-white px-5 pt-14 pb-14 shadow-card dark:bg-dark dark:shadow-card-dark xl:px-10" 
              style={{
                marginLeft: '-2rem',
                marginRight: '-2rem',
                backgroundColor: 'white',
                borderRadius: '10px',
                borderStyle: 'double',
                borderWidth: '2px',
                borderColor: '#08a88a',
              }}
            > */}
              <div className="-mx-4 flex flex-wrap justify-center">
                <BodyWrapper>{children}</BodyWrapper>
              {/* </div> */}
            </div>
          </div>
      </section>
    </main>
  )
}
