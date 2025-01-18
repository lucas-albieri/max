import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion";
import logoMax from "@/assets/images/logo.png";
import { ChevronDown, ChevronDownIcon } from "lucide-react";

export function AboutMax() {

    const aboutItems = [
        {
            title: "Como a Max é diferente da HBO Max?",
            description: "A Max combina os mundos da HBO e do Universo DC, além de filmes de sucesso, séries originais e os gêneros favoritos dos fãs, como novelas, crimes reais, reality shows, programas de culinária e comédia, além de oferecer uma experiência de usuário aprimorada. "
        },
        {
            title: "Eu era assinante da HBO Max. Eu tenho acesso à Max?",
            description: "Sim, todos os assinantes da HBO Max, sejam eles assinantes diretos da plataforma ou por meio de um dos parceiros da HBO Max na região, têm acesso à Max. "
        }
    ]

    const questions = [
        {
            title: 'Como eu faço para assinar?',
            content: "A Max está disponível para assinatura aqui na max.com e também através dos nossos provedores de assinatura na região. Se você tem a HBO no seu pacote de televisão por assinatura e/ ou serviço de internet, você terá acesso à Max sem custo adicional.Você pode entrar em contato com sua operadora local para obter mais detalhes."
        },
        {
            title: 'Onde a Max está disponível?',
            content: "Nossa plataforma aprimorada está disponível para Anguila, Antígua e Barbuda, Argentina, Aruba, Bahamas, Barbados, Belize, Bolívia, Brasil, Chile, Colômbia, Costa Rica, Curaçao, Dominica, Equador, El Salvador, Granada, Guatemala, Guiana, Haiti, Honduras, Ilhas Virgens Britânicas, Ilhas Cayman, Jamaica, México, Montserrat, Nicarágua, Panamá, Paraguai, Peru, República Dominicana, Saint Kitts e Nevis, Santa Lúcia, São Vicente e Granadinas, Suriname, Trinidad e Tobago, Turks e Caicos, Uruguai, Venezuela e Estados Unidos."
        },
        {
            title: 'Quanto custa a Max?',
            content: 'Novos usuários podem escolher entre três planos, dependendo de suas preferências: Plano Básico com Anúncios: A assinatura mensal custa R$29, 90 e a anual custa R$226, 80. /n Assista com anúncios limitados'
        },
        {
            title: 'Em quais dispositivos a Max está disponível?',
            content: 'A Max está disponível em dispositivos móveis, tablets, smart TVs, consoles de jogos, computadores e dispositivos de streaming. Para obter uma lista completa de dispositivos compatíveis, visite nossa página de dispositivos.'
        },
        {
            title: 'Eu tenho HBO, posso assistir à Max?',
            content: 'Sim, se você é assinante da HBO, você terá acesso à Max sem custo adicional. Você pode entrar em contato com sua operadora local para obter mais detalhes.'
        }
    ]

    return (
        <div
            className="w-full flex flex-col items-center justify-center py-12"
            style={{
                backgroundColor: "#07071C",
            }}
        >
            <img
                src={logoMax.src}
                alt="logo-max"
                className="h-20 object-contain"
            />

            <div
                className="flex flex-col items-start justify-center gap-8 w-1/2 mt-12"
            >
                {
                    aboutItems.map((item, index) => (
                        <AboutItem
                            key={index}
                            id={`${index + 1}`}
                            title={item.title}
                            description={item.description}
                        />
                    ))
                }
            </div>


            <div
                className="flex flex-col items-start justify-center gap-4 mt-32 w-1/2"
            >
                <h1
                    className="text-white text-4xl font-bold text-center w-full "
                >
                    Tem mais perguntas?
                </h1>

                <Accordion
                    type="single"
                    collapsible
                    className="mt-12 w-full"
                >
                    {questions.map((question, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="border-b border-gray-500 mb-6"
                        >
                            <AccordionTrigger
                                className="flex items-center w-full justify-between text-gray-400 hover:text-gray-300 text-2xl font-semibold py-4"
                            >
                                {question.title}
                                <ChevronDownIcon
                                />
                            </AccordionTrigger>
                            <AccordionContent
                                className="text-white p-4 text-lg "
                            >
                                {question.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>


            </div>

        </div>
    )
}


type Props = {
    id: string;
    title: string;
    description: string;
}

const AboutItem = ({ title, description, id }: Props) => {
    return (
        <div
            className="flex items-start justify-start gap-4 w-full"
        >
            <div
                className="rounded-full text-white w-12 h-12 flex items-center justify-center"
                style={{
                    background: "linear-gradient(180deg, rgba(1,41,223,1) 15%, rgba(1,1,123,1) 70%)",
                }}
            >
                <span
                    className="text-white text-2xl font-black"
                >
                    {id}
                </span>
            </div>
            <div
                className="flex flex-col items-start justify-center gap-4 w-full"
            >
                <h2
                    className="text-white text-3xl font-bold"
                >
                    {title}
                </h2>
                <p
                    className="text-gray-300"
                >
                    {description}
                </p>
            </div>
        </div>
    )
}