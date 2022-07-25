import { Col, Container, Grid, Text } from '@nextui-org/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Spline from '@splinetool/react-spline';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Container display='flex' justify='center' alignItems='center' style={{ height: '100vh' }} gap={5}>
        <Grid.Container gap={2} alignItems='center'>
          <Grid xs={9}>
            <Text h1>Hi 👋, start your DApp here ➡️</Text>
          </Grid>
          <Grid xs={3} justify='flex-end'>
            <ConnectButton />
          </Grid>
        </Grid.Container>

        <Grid.Container gap={2}>
          <Grid xs={6}>
            <Col>
              <Text
                h1
                css={{
                  textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }}
                weight="bold"
              >
                NextJS
              </Text>
              <Text
                h1
                css={{
                  textGradient: "45deg, $purple600 -20%, $pink600 100%",
                }}
                weight="bold"
              >
                RainbowKit
              </Text>
              <Text
                h1
                css={{
                  textGradient: "45deg, $yellow600 -20%, $red600 100%",
                }}
                weight="bold"
              >
                Template
              </Text></Col>
          </Grid>
          <Grid xs={6}>
            <Spline height={'700px'} width={'700px'} scene="https://prod.spline.design/JjyZ2JWcJGEegHzW/scene.splinecode" />
          </Grid>
        </Grid.Container>
      </Container>
    </>
  )
}

export default Home
