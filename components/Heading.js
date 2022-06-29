export default function Heading() {
    return (
      <div>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-lime-400 tracking-wide uppercase">By @camiinthisthang</h2>
            <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Made with {"<3"}
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-white">
            <a href="https://thegraph.com/en/">The Graph</a> + <a href="">RainbowKit</a> + <a href="">WAGMI</a> +{' '} <a href="">Web3.Storage</a> +{' '}
        <a href="https://nextjs.org">Next.js</a> + <a href="https://tailwindcss.com/">TailwindCSS</a> + Connect smart contract logic + Basic UI Components
            </p>
          </div>
        </div>
      </div>
    )
  }
  