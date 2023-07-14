
import { Badge, Card, Carousel, Col, Container, Image, Row, Stack } from 'react-bootstrap'
import './App.css'

function App() {

  let DataInfor = {
    id: 1,
    name: 'Robson Vicente de Oliveira',
    image: 'https://res.cloudinary.com/dmhcpr1ms/image/upload/v1688767629/small_IMG_20201219_074726415_28b5af86fd.jpg',
    ocupation: [
      {
        id: 1,
        name: '3D Model',
      },
      {
        id: 2,
        name: 'Programming front-end React-JS e React-Native'
      }
    ]
  }

  let DataCarousel = [
    {
      id: 1,
      title: '3D Models',
      projects: [
        {
          id: 1,
          title: 'Pilar Japones',
          imageMain: 'https://res.cloudinary.com/dmhcpr1ms/image/upload/v1688767955/Pilar%20Japones/Pilar_Japones_Front_With_Material_2ef365ffce.webp',
          imagens: [],
          description: 'Essa é uma modelagem de um Pilar baseado na cultura Japonesa',
          softsorLibres: [
            {
              id: 1,
              name: 'Blender'
            }
          ]
        },
        {
          id: 2,
          title: 'Bim Temporizador - Btooom',
          imageMain: 'https://res.cloudinary.com/dmhcpr1ms/image/upload/v1688767807/Bitooom%20-%20Bim%20Temporizador/Bim_Temporizador_Front_848278f929.webp',
          imagens: [],
          description: 'Essa é uma bomba que se explode quando o contador decrecente que começa em 10s e quando chega a zero segundos, referencia a um anime intitulado de "BTOOOM!"',
          softsorLibres: [
            {
              id: 1,
              name: 'Blender'
            }
          ]
        },
      ]
    },
    {
      id: 2,
      title: 'Front-end Web',
      projects: [
        {
          id: 1,
          title: 'Site Landing Page',
          imageMain: 'https://res.cloudinary.com/dmhcpr1ms/image/upload/v1688768130/LandingPage/Eletro_Club_202361617954_c19fd7d778.png',
          imagens: [],
          urlrepo: 'https://github.com/HidanRobson/LandingPage',
          description: 'Esse é um site em forma de Landing Page feito para uma cliente, o designer foi feito por outra pessoa (Larissa), o codigo foit totalmente feito por min, construido em Next-js utilizando a biblioteca React-js e Mantine como biblioteca de estilização.',
          softsorLibres: [
            {
              id: 1,
              name: 'Next.JS'
            },
            {
              id: 2,
              name: 'React.JS'
            },
            {
              id: 3,
              name: 'Mantine'
            },
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'React-Native',
      projects: [

      ]
    }
  ]
  return (
    <>
      {
        DataInfor != null && (
          <div style={{ backgroundColor: '#38bc9c', height: '30em', width: '100%', paddingTop: '4rem' }}>
            <Image className="d-cover" height={200} roundedCircle src={DataInfor?.image} />
            <h1 style={{ color: 'white' }}>{DataInfor?.name}</h1>


            {DataInfor.ocupation.map((ocupation) => (
              <h3 style={{ color: '#ffffff', }} key={ocupation.id}>{ocupation.name}</h3>
            ))}
          </div>
        )
      }

      <h1 style={{ color: '#2c3e50', fontWeight: 'bold', marginTop: '2rem' }}>PORTFOLIO</h1>
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
        <path color='#2c3e50' d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
      </svg>
      {DataCarousel.map((categoria) => (
        categoria?.projects.length != 0 &&
        <div key={categoria.id} style={{ marginTop: '2rem' }}>
          <h2 style={{ color: '#2c3e50', fontWeight: 'bold', marginTop: '3rem', marginBottom: '2rem' }}>{categoria?.title}</h2>
          <Carousel data-bs-theme="light" indicators={false}>
            {
              categoria.projects.map((project) => (
                <Carousel.Item key={project.id} >
                  <a href={project.urlrepo} target='_blank'>
                    <Image fluid src={project.imageMain} />
                  </a>
                  <Carousel.Caption>
                    <h3>{project?.title}</h3>
                    <p>{project?.description}</p>
                  </Carousel.Caption>
                  <Carousel className='mt-3' fade pause={false} indicators={false} controls={false} interval={1000} >
                    {
                      project?.softsorLibres.map((softsorLibre) => (
                        <Carousel.Item key={softsorLibre.id}>
                          <Badge pill bg="primary">
                            {softsorLibre?.name}
                          </Badge>
                        </Carousel.Item>
                      ))
                    }
                  </Carousel>
                </Carousel.Item>
              ))
            }
          </Carousel>
        </div>
      ))
      }
      <div style={{ backgroundColor: '#38bc9c', width: '100%', paddingTop: '4rem', marginTop: '2rem' }}>
        <h1 style={{ color: '#ffffff', fontWeight: 'bold' }}>ABOUT</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
          <path color='#ffffff' d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <Container className='mt-5'>
          <Row>
            <Col>
              <p style={{ color: '#ffffff', fontWeight: 'bolder', fontSize: '1.3em' }} className="p-2">
                Olá meu nome é Robson Vicente, esse é meu portifólio, atualmente atuo como freelancer em front-end, no front-end tenho usado bibliotecas com React, React Native, BootStrap e frameworks como Next e Node.
              </p>
            </Col>
            <Col>
              <p style={{ color: '#ffffff', fontWeight: 'bolder', fontSize: '1.3em' }} className="p-2">
                Sou formado em jogos digitais pela universidade cruzeiro do sul, estou estudando modelagem 3d e futuramente penso em entrar nessa área, desde já estou fazendo meu curiculo com alguns projetos que foi feito por min mesmo no software blender 3d e outros do tipo.
              </p>
            </Col>
          </Row>
        </Container>
      </div >

      <div style={{ backgroundColor: '#2c3e50', height: '19em', width: '100%', paddingTop: '8rem', paddingBottom: '8rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
        <Row>
          <Col>
            <h2 style={{ color: '#ffffff', fontWeight: 'bolder', fontSize: '1.3rem', paddingBottom: '1.3rem' }}>Location</h2>
            <h4 style={{ color: '#ffffff', fontWeight: 'bolder', fontSize: '1rem' }}>Projetada Um, Diamante - PB</h4>
          </Col>
          <Col>
            <h2 style={{ color: '#ffffff', fontWeight: 'bolder', fontSize: '1.3rem', paddingBottom: '1.3rem' }}>AROUND THE WEB</h2>
            <a href='https://linkedin.com/in/robson-vicente-de-oliveira-246988177' target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                <path color='#ffffff' d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
          </Col>
        </Row>
      </div>

      <div style={{ backgroundColor: '#1a252f', height: '5em', width: '100%', paddingTop: '2rem' }}>
        <h2 style={{ color: '#ffffff', fontSize: '1rem' }}>Copyright © Portfolio 2023</h2>
      </div>
    </>
  )
}

export default App
