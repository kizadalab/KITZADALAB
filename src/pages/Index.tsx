import { useState } from "react";
import { AudioPlayer } from "../components/AudioPlayer";
import { PricingCard } from "../components/PricingCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { TikTokIcon } from "../components/TikTokIcon";
import { Instagram, ArrowDown } from "lucide-react";
export default function Index() {
  const [activeTab, setActiveTab] = useState(1);
  const handleDownloadNow = () => {
    window.location.href = 'https://pay.cakto.com.br/35payx6_345747';
  };
  return <div className="min-h-screen lab-gradient-bg text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-dark-navy opacity-90 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80')] 
                        bg-cover bg-center opacity-20 z-[-1]"></div>
        
        {/* Logo and Title */}
        <div className="z-10 max-w-4xl">
          <div className="mb-6 flex justify-center">
            <img src="/lovable-uploads/a84f1deb-e824-4c04-8ab5-7213ed16a078.png" alt="KITZADALAB Logo" className="w-64 h-64 mb-4 animate-float" />
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-4 tracking-tight">
            <span className="neon-text glow">TRAPZADA</span> <span className="text-white">VOL. 1</span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            🚀 Beats de Trap Premium Criados para Produtores Modernos<br />
            🎧 WAVs + STEMS | FLPs | Livre de Royalties | Qualidade Profissional
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleDownloadNow} className="px-8 py-4 rounded-md bg-gradient-to-r from-neon-blue to-lab-green text-dark-navy font-bold text-lg button-glow hover-scale">
              🔊 Baixar Agora
            </button>
            <button className="px-8 py-4 rounded-md border-2 border-white border-opacity-20 hover:border-opacity-50 text-white font-bold text-lg button-glow hover-scale">
              🎧 Ouvir Preview
            </button>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-neon-blue opacity-80" />
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="neon-text">Conteúdo</span> do Pacote
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-effect rounded-lg p-6 hover-scale">
              <div className="text-neon-blue text-2xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-2">155 Beats de Trap Profissionais</h3>
              <p className="text-gray-400">Faça produções de alta qualidade prontas para seus vocais.</p>
            </div>
            
            <div className="glass-effect rounded-lg p-6 hover-scale">
              <div className="text-neon-blue text-2xl mb-4">🎚️</div>
              <h3 className="text-xl font-bold mb-2">WAVs em Alta Qualidade</h3>
              <p className="text-gray-400">Elementos individuais para personalização completa.</p>
            </div>
            
            <div className="glass-effect rounded-lg p-6 hover-scale">
              <div className="text-neon-blue text-2xl mb-4">🔁</div>
              <h3 className="text-xl font-bold mb-2">Loops Prontos para Usar</h3>
              <p className="text-gray-400">Loops perfeitamente sincronizados para integração fácil.</p>
            </div>
            
            <div className="glass-effect rounded-lg p-6 hover-scale">
              <div className="text-neon-blue text-2xl mb-4">🧪</div>
              <h3 className="text-xl font-bold mb-2">Projetos do FL Studio</h3>
              <p className="text-gray-400">Arquivos completos para personalizar cada aspecto.</p>
            </div>
            
            <div className="glass-effect rounded-lg p-6 hover-scale">
              <div className="text-neon-blue text-2xl mb-4">📜</div>
              <h3 className="text-xl font-bold mb-2">Licença Comercial Sem Royalties</h3>
              <p className="text-gray-400">Use em projetos comerciais sem taxas recorrentes.</p>
            </div>
            
            <div className="glass-effect rounded-lg p-6 hover-scale bg-gradient-to-br from-dark-navy to-[#1a1a2e]">
              <div className="text-lab-green text-2xl mb-4">🧬</div>
              <h3 className="text-xl font-bold mb-2">Criado com Precisão</h3>
              <p className="text-gray-400">Usando MPC, Ableton e masterização analógica para som perfeito.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Audio Preview Section */}
      <section className="py-20 px-4 bg-dark-navy bg-opacity-60">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="neon-text">Áudio</span> & Preview Visual
          </h2>
          
          <div className="mb-10">
            <div className="flex overflow-x-auto space-x-2 mb-6 pb-2">
              <button className={`px-4 py-2 rounded-md whitespace-nowrap ${activeTab === 1 ? 'bg-gradient-to-r from-neon-blue to-lab-green text-dark-navy' : 'text-white bg-white bg-opacity-10'}`} onClick={() => setActiveTab(1)}>
                Trap Anthem
              </button>
              <button className={`px-4 py-2 rounded-md whitespace-nowrap ${activeTab === 2 ? 'bg-gradient-to-r from-neon-blue to-lab-green text-dark-navy' : 'text-white bg-white bg-opacity-10'}`} onClick={() => setActiveTab(2)}>
                808 Cosmos
              </button>
              <button className={`px-4 py-2 rounded-md whitespace-nowrap ${activeTab === 3 ? 'bg-gradient-to-r from-neon-blue to-lab-green text-dark-navy' : 'text-white bg-white bg-opacity-10'}`} onClick={() => setActiveTab(3)}>
                Neon Drill
              </button>
              <button className={`px-4 py-2 rounded-md whitespace-nowrap ${activeTab === 4 ? 'bg-gradient-to-r from-neon-blue to-lab-green text-dark-navy' : 'text-white bg-white bg-opacity-10'}`} onClick={() => setActiveTab(4)}>
                Cybertrap
              </button>
              <button className={`px-4 py-2 rounded-md whitespace-nowrap ${activeTab === 5 ? 'bg-gradient-to-r from-neon-blue to-lab-green text-dark-navy' : 'text-white bg-white bg-opacity-10'}`} onClick={() => setActiveTab(5)}>
                Lab Experiment
              </button>
            </div>
            
            {activeTab === 1 && <AudioPlayer audioSrc="/trap-anthem.mp3" title="Trap Anthem (20 sec preview)" />}
            {activeTab === 2 && <AudioPlayer audioSrc="/808-cosmos.mp3" title="808 Cosmos (20 sec preview)" />}
            {activeTab === 3 && <AudioPlayer audioSrc="/neon-drill.mp3" title="Neon Drill (20 sec preview)" />}
            {activeTab === 4 && <AudioPlayer audioSrc="/cybertrap.mp3" title="Cybertrap (20 sec preview)" />}
            {activeTab === 5 && <AudioPlayer audioSrc="/lab-experiment.mp3" title="Lab Experiment (20 sec preview)" />}
          </div>
          
          <div className="text-center">
            <button className="px-6 py-3 rounded-md bg-white bg-opacity-10 text-white hover:bg-opacity-20 transition-all duration-300">
              Ver Todos os Previews
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            <span className="neon-text">Escolha</span> Seu Pacote de Beats
          </h2>
          
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Selecione o pacote que atende às suas necessidades de produção. Todos os pacotes incluem arquivos de alta qualidade prontos para seu próximo hit.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard title="Pacote Iniciante" price="29" features={["10 Beats em WAV", "Licença Básica", "Uso comercial limitado", "Suporte por email"]} ctaText="Começar Agora" />
            
            <PricingCard title="Pacote Criador" price="59" features={["Todos os 25 Beats em WAV", "STEMS incluídos", "Arquivos de Projeto FLP", "Licença Pro", "Uso comercial ilimitado", "Suporte prioritário"]} isPopular={true} ctaText="Melhor Valor" />
            
            <PricingCard title="Kit Lab Ultimate" price="99" features={["Tudo do Pacote Criador", "Atualizações vitalícias", "Conteúdo bônus exclusivo", "Consultoria 1-a-1 com produtor", "Pedido de beat personalizado", "Suporte VIP"]} ctaText="Quero o Ultimate" />
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-block glass-effect rounded-lg py-3 px-6 border border-neon-blue">
              <p className="text-neon-blue font-bold">🎁 Primeiros 100 downloads recebem 3 beats bônus inéditos!</p>
            </div>
            
            <div className="mt-4 text-xl">
              <span className="text-white">Use o código </span>
              <span className="font-mono font-bold text-lab-green">TRAP25</span>
              <span className="text-white"> no checkout para 25% de desconto</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-dark-navy bg-opacity-60">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="neon-text">O que</span> os Produtores Dizem
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard quote="Os beats são diferentes. Minha faixa entrou em 3 playlists em uma semana." author="@808VYBE" />
            
            <TestimonialCard quote="Melhor investimento que fiz como artista independente." author="@RaeOnTheTrack" />
            
            <TestimonialCard quote="KITZADALAB entende o som atual. Tudo é pesado." author="@YoungStatic" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            <span className="neon-text">Som</span> Projetado para o Futuro
          </h2>
          
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            KITZADALAB é um laboratório sonoro dedicado a expandir as fronteiras da produção de Trap, Drill e híbridos. 
            Com raízes na ciência e design de som, cada beat é engenheirado com propósito.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-10">
            <a href="https://instagram.com/kitzadalab" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 rounded-md bg-white bg-opacity-10 hover:bg-opacity-20 transition-all">
              <Instagram size={20} className="mr-2" />
              <span>@kitzadalab</span>
            </a>
            
            <a href="https://tiktok.com/@kitzadalab" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 rounded-md bg-white bg-opacity-10 hover:bg-opacity-20 transition-all">
              <TikTokIcon size={20} className="mr-2" />
              <span>@kitzadalab</span>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-dark-navy to-[#1a1a2e]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            <span className="neon-text">Fique</span> Conectado
          </h2>
          
          <p className="text-gray-300 text-lg mb-8">
            👉 Entre na newsletter do LAB para drops exclusivos, samples e desafios de produção
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input type="email" placeholder="Seu endereço de email" className="flex-1 px-4 py-3 bg-white bg-opacity-10 rounded-md border border-white border-opacity-20 focus:outline-none focus:border-neon-blue" />
            <button className="px-6 py-3 rounded-md bg-gradient-to-r from-neon-blue to-lab-green text-dark-navy font-bold">
              Inscrever
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white border-opacity-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="font-bold text-2xl neon-text glow mb-6 md:mb-0">KITZADALAB</div>
            
            <div className="flex gap-8">
              <a href="#" className="text-gray-400 hover:text-white">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-white">Termos e Condições</a>
              <a href="#" className="text-gray-400 hover:text-white">Info de Licenciamento</a>
              <a href="#" className="text-gray-400 hover:text-white">Suporte / Contato</a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white border-opacity-10 pt-8">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 KITZADALAB — Todos os direitos reservados.
            </div>
            
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/kitzadalab" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors">
                <Instagram size={20} />
              </a>
              
              <a href="https://tiktok.com/@kitzadalab" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors">
                <TikTokIcon size={20} />
              </a>
              
              <a href="https://www.kitzadalab.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors">
                www.kitzadalab.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
}