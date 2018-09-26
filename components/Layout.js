const Layout = (props) => (
    <main>
      {props.children}
      <style jsx>{`
        main{
          max-width:900px;
          margin:0 auto;
          border: 1px solid black;
          padding: 2rem;
        }
      `}</style>
    </main>
  )
  
  export default Layout