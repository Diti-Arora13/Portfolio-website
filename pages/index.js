import { Flex, Text} from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  const breakpoints = {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  }

  return (
    <>
    <div>
      <Head>
        <title>Diti</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png"/>
      </Head>
    </div>

  <div className="main">

  <Flex justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
    <Flex justifyContent={"center"} marginTop={"46px"}>
        <Flex alignContent={"center"} flexDirection={"column"}>

        <Text fontSize={{base:"20px", md:"28px"}} color={"white"} fontWeight={"bold"}>Hey I&apos;m<span className='head'> Diti</span></Text>
        
        <Flex marginTop={"24px"} p={"16px"} width={{base:"300px",md:"750px"}} backgroundColor={"#1F1F1F"} rounded={"7px"}>
          <Text color={"#B3B3B3"} fontWeight={"400"} fontSize={{base:"12px", md:"16px"}}>
          I&apos;m a 12 y/o ReactJs Developer and UI designer. I&apos;ve been working with HTML, CSS, JavaScript, React and Tailwind from the past 2 years. I love to explore web dev and get better at it.
          Currently I&apos;m learning and trying to break into the web3 space.

          <br/><br/>
          Connect with me on <span className='titles' style={{color:"white", opacity:"85"}}><a href="https://twitter.com/theditiarora">twitter</a></span> or <span className='titles' style={{color:"white", opacity:"85"}}><a href="https://github.com/Diti-Arora13">github</a>.</span>
          </Text>
        </Flex>

        <Flex marginTop={"36px"} fontSize={{base:"20px", md:"28px"}} fontWeight={"bold"} color={"white"}>proof of work✨</Flex>
        
        <Flex flexDirection={"column"} marginTop={"24px"} width={{base:"300px",md:"750px"}} color={"white"}>
        
        <Text className="project" fontSize={{base:"12px", md:"16px"}}>
             <span className="titles"><a href='https://now-and-me-task.netlify.app/'>Now&Me - Task</a> </span> → <span className='para'> This was an internship task where I had to make a demo app where people can vent and share their feelings. </span>
        </Text>
        
        <Text className="project" fontSize={{base:"12px", md:"16px"}}>
             <span className="titles"><a href='https://coder-space.vercel.app/'>Coder Spacer</a> </span> → <span className='para'> 
             Social networking platform for programmers where they can come hang out, nerd out on their favourite topics/interests together. Share anything, connect with others.
             </span>
        </Text>

        <Text className="project" fontSize={{base:"12px", md:"16px"}}>
             <span className="titles"><a href='https://diti-arora13.github.io/Alpaca-Generator/'>Alpaca Generator</a> </span> → <span className='para'> 
             Alpaca is a cartoon character. This app lets you customize one of your own, play with the styles, change the accessories and more.
             </span>
        </Text>

        <Text className="project" fontSize={{base:"12px", md:"16px"}}>
             <span className="titles"><a href='https://diti-arora13.github.io/Twitter-login-page-clone/'>Twitter Clone</a> </span> → <span className='para'> 
             Twitter sign-up page clone. </span>
        </Text>

        <Text className="project" fontSize={{base:"12px", md:"16px"}}>
             <span className="titles"><a href='http://diti-arora13.github.io/Gradient-Generator/'>Gradient Generator</a> </span> → <span className='para'> 
             A tool that lets you generate CSS code of all sorts of linear gradients. </span>
        </Text>

        <Text className="project" fontSize={{base:"12px", md:"16px"}}>
             <span className="titles"><a href='https://diti-arora13.github.io/JS-Calculator/'>Calculator</a> </span> → <span className='para'> 
             A calculator app written in JavaScript.
              </span>
        </Text>
    
        </Flex>

      </Flex> 
    </Flex>
  
  </Flex>
  </div>
  </>
  )
}
