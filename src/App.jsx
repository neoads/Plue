import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto p-4">
        <section className="my-8 text-center">
          <h1 className="text-4xl font-bold">Plue Marketing</h1>
          <h2 className="text-xl mb-2">Douglas Monteiro de Lima Silva</h2>
          <h2 className="text-2xl mb-8">60.392.653/0001-95</h2>
          <h2 className="text-3xl font-bold mb-4">NOSSA MISSÃO:</h2>
          <p className="text-lg italic max-w-3xl mx-auto">
            "Oferecer soluções criativas e estratégicas em marketing digital com inovação, qualidade e resultados efetivos, transformando desafios empresariais em oportunidades de crescimento sustentável. Com expertise no mercado digital, buscamos superar as expectativas dos nossos clientes através de campanhas personalizadas, estratégias comprovadas e acompanhamento dedicado, sempre com transparência e comprometimento. Nossa missão é ajudar empresas a alcançarem seus objetivos digitais, construindo relacionamentos sólidos baseados na confiança, criatividade e sucesso compartilhado."
          </p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">CONTATO:</h2>
          <p className="text-lg">Telefone: (31) 973198749</p>
          <p className="text-lg">E-mail: contate@corssar.com</p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">QUEM SOMOS?</h2>
          <p className="text-lg max-w-3xl mx-auto text-justify">
            A <strong className="font-bold">Plue Marketing</strong>, empresa individual de <strong className="font-bold">Douglas Monteiro de Lima Silva</strong>, registrada sob o CNPJ <strong className="font-bold">60.392.653/0001-95</strong>, foi fundada em <strong className="font-bold">14 de abril de 2025</strong>, na cidade de <strong className="font-bold">Maceió, Alagoas</strong>. Como uma empresa jovem e dinâmica no mercado, atuamos no segmento de <strong className="font-bold">marketing digital e estratégico</strong>, oferecendo serviços que unem <strong className="font-bold">criatividade, inovação e resultados mensuráveis</strong> para impulsionar o crescimento empresarial.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Nossa atividade principal abrange <strong className="font-bold">marketing digital, gestão de redes sociais e consultoria estratégica</strong>, desenvolvendo campanhas customizadas que atendem às necessidades específicas de cada cliente. Com <strong className="font-bold">5 meses de atividade</strong> no mercado, nos destacamos pela <strong className="font-bold">abordagem criativa, metodologia eficaz e atendimento personalizado</strong>, sempre buscando superar expectativas e entregar resultados tangíveis.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Localizada na <strong className="font-bold">Avenida Antônio Lisboa de Amorim, 420, Cond Res Central Park Bloco 8 Apt 108, Antares, Maceió-AL (CEP 57083-048)</strong>, nossa empresa é especializada em soluções digitais, proporcionando uma experiência de atendimento profissional e inovadora. Valorizamos a <strong className="font-bold">transparência, a criatividade e a satisfação do cliente</strong>, garantindo que cada projeto seja executado com excelência e dedicação.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Na <strong className="font-bold">Plue Marketing</strong>, acreditamos que <strong className="font-bold">o sucesso digital reflete a qualidade das estratégias criativas aplicadas</strong>. Por isso, nosso compromisso vai além da prestação de serviços: queremos ajudar você a criar <strong className="font-bold">resultados únicos, impactantes e sustentáveis</strong>, seja no crescimento da sua presença digital ou na otimização de campanhas.
          </p>
        </section>

        <section className="my-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Serviços Disponíveis:</h3>
          <ul className="list-disc list-inside text-lg text-left">
            <li><strong className="font-bold">Marketing Digital</strong> – Estratégias que combinam <strong className="font-bold">criatividade, inovação e resultados</strong>.</li>
            <li><strong className="font-bold">Gestão de Redes Sociais</strong> – Soluções que amplificam a presença da sua marca no ambiente digital.</li>
            <li><strong className="font-bold">Consultoria Estratégica</strong> – Auxílio na definição das melhores estratégias para seu negócio digital.</li>
            <li><strong className="font-bold">Campanhas Publicitárias</strong> – Projetos desenvolvidos com criatividade e entregues com eficiência.</li>
          </ul>
        </section>

        <section className="my-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Informações da Empresa:</h3>
          <ul className="list-disc list-inside text-lg text-left">
            <li><strong className="font-bold">Razão Social:</strong> Douglas Monteiro de Lima Silva</li>
            <li><strong className="font-bold">Nome Fantasia:</strong> Plue Marketing</li>
            <li><strong className="font-bold">CNPJ:</strong> 60.392.653/0001-95</li>
            <li><strong className="font-bold">Data de Abertura:</strong> 14/04/2025</li>
            <li><strong className="font-bold">Tempo de Atividade:</strong> 5 meses e 16 dias</li>
            <li><strong className="font-bold">Porte:</strong> Micro Empresa</li>
            <li><strong className="font-bold">Natureza Jurídica:</strong> Empresário (Individual)</li>
            <li><strong className="font-bold">Opção pelo MEI:</strong> Não</li>
            <li><strong className="font-bold">Opção pelo Simples:</strong> Sim</li>
            <li><strong className="font-bold">Data opção Simples:</strong> 14/04/2025</li>
            <li><strong className="font-bold">Situação Cadastral:</strong> Ativa</li>
            <li><strong className="font-bold">Data Situação Cadastral:</strong> 14/04/2025</li>
            <li><strong className="font-bold">Tipo:</strong> Matriz</li>
            <li><strong className="font-bold">Capital Social:</strong> R$ 10.000,00</li>
          </ul>
        </section>

        <section className="my-8 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Localização e Contato:</h3>
          <p className="text-lg">📍 <strong className="font-bold">Endereço:</strong> Avenida Antônio Lisboa de Amorim, 420, Cond Res Central Park Bloco 8 Apt 108, Antares, Maceió-AL, <strong className="font-bold">CEP 57083-048</strong></p>
          <p className="text-lg">📞 <strong className="font-bold">Telefone/WhatsApp:</strong> <a href="https://wa.me/5531973198749" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">(31) 973198749</a></p>
          <p className="text-lg">📧 <strong className="font-bold">E-mail:</strong> <a href="mailto:contate@corssar.com" className="text-blue-500 hover:underline">contate@corssar.com</a></p>
          <p className="text-lg mt-4">Na <strong className="font-bold">Plue Marketing</strong>, estamos prontos para ajudar você a <strong className="font-bold">alcançar os melhores resultados digitais</strong>. Entre em contato e descubra como <strong className="font-bold">estratégias criativas podem transformar sua presença digital!</strong> 🚀✨</p>
        </section>

        <section className="my-8 text-center">
          <a href="https://wa.me/5531973198749" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><h2 className="text-3xl font-bold mb-4">Fale conosco:</h2></a>
          {/* Formulário de contato ou link para WhatsApp */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-8 mt-8">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-xl font-bold mb-4">RODAPÉ & POLÍTICA DE PRIVACIDADE</h3>
          <h4 className="text-lg font-bold mb-2">Plue Marketing - Douglas Monteiro de Lima Silva</h4>
          <p className="text-sm"><strong>CNPJ:</strong> 60.392.653/0001-95</p>
          <p className="text-sm"><strong>Razão Social:</strong> Douglas Monteiro de Lima Silva</p>
          <p className="text-sm"><strong>Nome Fantasia:</strong> Plue Marketing</p>
          <p className="text-sm"><strong>Data de Abertura:</strong> 14/04/2025</p>
          <p className="text-sm"><strong>Porte:</strong> Micro Empresa</p>
          <p className="text-sm"><strong>Natureza Jurídica:</strong> Empresário (Individual)</p>
          <p className="text-sm"><strong>Situação Cadastral:</strong> Ativa</p>
          <p className="text-sm"><strong>Tipo:</strong> Matriz</p>
          <p className="text-sm"><strong>Capital Social:</strong> R$ 10.000,00</p>
          <p className="text-sm"><strong>Endereço:</strong> Avenida Antônio Lisboa de Amorim, 420, Cond Res Central Park Bloco 8 Apt 108, Antares, Maceió-AL</p>
          <p className="text-sm"><strong>CEP:</strong> 57083-048</p>
          <p className="text-sm"><strong>E-mail:</strong> contate@corssar.com</p>
          <p className="text-sm"><strong>Telefone/WhatsApp:</strong> (31) 973198749</p>
          <p className="text-sm italic mt-4">Transformando negócios com criatividade e estratégia digital desde 2025</p>

          <h4 className="text-lg font-bold mt-8 mb-2">POLÍTICA DE PRIVACIDADE</h4>
          <p className="text-sm"><strong>Plue Marketing - Douglas Monteiro de Lima Silva</strong></p>
          <p className="text-sm"><strong>CNPJ:</strong> 60.392.653/0001-95</p>
          <p className="text-sm"><strong>Endereço:</strong> Avenida Antônio Lisboa de Amorim, 420, Cond Res Central Park Bloco 8 Apt 108, Antares, Maceió-AL, CEP 57083-048</p>

          <h5 className="text-md font-bold mt-4 mb-2">1. Finalidade</h5>
          <p className="text-sm">Esta política descreve como coletamos, utilizamos e protegemos os dados pessoais dos clientes que interagem conosco por meio de WhatsApp, e-mail, telefone, redes sociais ou durante consultorias presenciais.</p>

          <h5 className="text-md font-bold mt-4 mb-2">2. Dados Coletados</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">Informações fornecidas voluntariamente:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Nome, telefone, e-mail, endereço (para orçamentos ou consultorias).</li>
                <li>Informações sobre o negócio e necessidades de marketing digital.</li>
              </ul>
            </li>
            <li><strong className="font-bold">Dados automáticos:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Registro de interações para atendimento e melhoria de serviços.</li>
                <li>Dados de navegação (se aplicável a site ou redes sociais).</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">3. Uso de WhatsApp, Telefone e E-mail</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">Finalidades:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Atendimento ao cliente, orçamentos, agendamento de consultorias e acompanhamento de campanhas.</li>
                <li>Não enviamos mensagens promocionais não solicitadas sem consentimento.</li>
              </ul>
            </li>
            <li><strong className="font-bold">Armazenamento:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Dados de contato e interações são armazenados por <strong className="font-bold">12 meses</strong>, exceto quando exigido por lei.</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">4. Compartilhamento de Dados</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Não comercializamos ou compartilhamos dados com terceiros para fins publicitários.</li>
            <li><strong className="font-bold">Exceções:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Parceiros de serviços (apenas informações necessárias para execução de campanhas).</li>
                <li>Autoridades legais, mediante requisição formal.</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">5. Direitos do Usuário (LGPD)</h5>
          <p className="text-sm">Você pode solicitar:</p>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Acesso ou correção dos seus dados.</li>
            <li>Exclusão (exceto quando a lei exigir retenção).</li>
            <li>Revogação de consentimento (via e-mail ou telefone).</li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">6. Segurança</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Dados protegidos com acesso restrito à equipe autorizada.</li>
            <li>Não solicitamos informações sensíveis (como CPF ou cartões de crédito) por mensagens não criptografadas.</li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">7. Alterações nesta Política</h5>
          <p className="text-sm">Atualizações serão comunicadas em nossos canais oficiais.</p>

          <h5 className="text-md font-bold mt-4 mb-2">8. Contato</h5>
          <p className="text-sm">Dúvidas ou solicitações sobre seus dados?</p>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">WhatsApp:</strong> (31) 973198749</li>
            <li><strong className="font-bold">E-mail:</strong> contate@corssar.com</li>
          </ul>
          <p className="text-sm mt-4">© 2025 Plue Marketing - Douglas Monteiro de Lima Silva. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
