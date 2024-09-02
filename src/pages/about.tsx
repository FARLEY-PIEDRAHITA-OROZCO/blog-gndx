import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <p>Esta página web es un repositorio de documentación técnica diseñado para el aprendizaje práctico y ágil en programación. Aquí encontrarás guías detalladas, estructuradas día a día, que te permitirán dominar conceptos clave a través de ejemplos y proyectos prácticos. Desde los fundamentos de la programación hasta el manejo avanzado de estructuras de datos y algoritmos, cada documento está diseñado para ayudarte a aprender mientras codificas. Este recurso es ideal para quienes buscan una forma estructurada y práctica de aprender programación, con un enfoque en la aplicación inmediata de los conocimientos adquiridos.</p>
    </Content>
  </Main>
);

export default About;
