import Link from 'next/link'

import { Layout, Title, Text } from 'src/components'
import { experiences } from 'src/utils/experiences'
import { Experiences, Role } from 'src/styles/pages/career'

const Career = () => (
  <Layout align="center">
    <div>
      <Title>Carreira</Title>
      <Text type="paragraph">
        Todo o trajeto da minha carreira profissional até o momento.
      </Text>

      <Text type="paragraph">
        <Link href="https://www.linkedin.com/in/vitor-serrano/">
          <a target="_blank">Ver experiências no Linkedin</a>
        </Link>
      </Text>

      <Experiences>
        {experiences.map(experience => (
          <div key={experience.id} className="items">
            <Role>{experience.role}</Role>
            <Text type="paragraph">
              <Link href={experience.url} passHref>
                <a target="_blank">{experience.company}</a>
              </Link>{' '}
              • {experience.location} <br />
              <span>{experience.time}</span>
            </Text>

            <div className="separator" />
          </div>
        ))}
      </Experiences>
    </div>
  </Layout>
)

export default Career
