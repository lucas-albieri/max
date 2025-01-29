'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownToLineIcon, CheckIcon, HeadsetIcon, MonitorIcon } from "lucide-react";
import { useState } from "react";

export function Plans() {

    const [selectedPlan, setSelectedPlan] = useState<"mensal" | "anual">('mensal')

    const plans = [
        {
            type: 'mensal',
            title: 'Básico com Anúncios',
            features: [
                "2 dispositivos ao mesmo tempo",
                "Resolução Full HD"
            ],
            monthPrice: 'R$ 29,90',
            yearPrice: 'R$ 226,80'
        },
        {
            type: 'mensal',
            title: 'Standard',
            features: [
                "2 dispositivos ao mesmo tempo",
                "Resolução Full HD",
                "30 downloads para curtir off-line"
            ],
            monthPrice: 'R$ 39,90',
            yearPrice: 'R$ 358,80'
        },
        {
            type: 'mensal',
            title: 'Platinum',
            features: [
                "4 dispositivos ao mesmo tempo",
                "Resolução Full HD e 4K Ultra HD",
                "100 downloads para curtir off-line",
                "Audio Dolby Atmos",
            ],
            monthPrice: 'R$ 55,90',
            yearPrice: 'R$ 478,80'
        },

    ]

    return (
        <div
            className="flex flex-col items-center justify-center mt-4 w-full"
        >
            <h1
                className="text-white text-center text-2xl lg:text-3xl font-bold mt-10"
            >
                ESCOLHA O MELHOR PLANO PARA VOCÊ
            </h1>
            <div
                className="flex gap-1 mt-6 rounded-full "
                style={{
                    backgroundColor: "#2748E3"
                }}
            >
                <Button
                    onClick={() => setSelectedPlan('mensal')}
                    className="font-bold rounded-full text-base lg:text-lg px-6 lg:px-12 py-6"
                    size={'lg'}
                    style={{
                        backgroundColor: selectedPlan === 'mensal' ? '#fff' : '#2747E2',
                        color: selectedPlan === 'mensal' ? '#262626' : '#fff',
                        fontWeight: selectedPlan === 'mensal' ? 'bold' : 'normal'
                    }}
                >
                    MENSAL
                </Button>
                <Button
                    onClick={() => setSelectedPlan('anual')}
                    className=" rounded-full text-base lg:text-lg px-3 lg:px-6 py-6"
                    size={'lg'}
                    style={{
                        backgroundColor: selectedPlan === 'anual' ? '#fff' : '#2747E2',
                        color: selectedPlan === 'anual' ? '#262626' : '#fff',
                        fontWeight: selectedPlan === 'anual' ? 'bold' : 'normal'
                    }}
                >
                    ANUAL PARCELADO
                </Button>
            </div>

            <div
                className="flex gap-4 mt-6 w-full flex-col lg:flex-row justify-center items-center"
            >
                {plans.map((plan, index) => {
                    return (
                        <CardPlan
                            key={index}
                            features={plan.features}
                            price={selectedPlan === 'mensal' ? plan.monthPrice : plan.yearPrice}
                            type={selectedPlan}
                            title={plan.title}
                        />
                    )
                })}
            </div>
            <p
                className="text-white text-center mt-8 w-11/12 lg:w-1/2 text-xs"
            >
                *Full HD, 4K Ultra HD e Dolby Atmos não estão disponíveis em todo o conteúdo de cada plano. O conteúdo ao vivo nos planos Standard e Platinum pode conter anúncios.Downloads podem ter restrições em algumas categorias de conteúdo. Saiba mais em: help.max.com/plans. Economia calculada com base no preço da assinatura anual vs. a assinatura mensal regular ao longo de 12 meses.
            </p>
        </div>
    )
}

type CardsProps = {
    title: string;
    price: string;
    features: string[];
    type?: 'mensal' | 'anual';
}

const CardPlan = ({ features, price, title, type }: CardsProps) => {
    return (
        <Card
            className="w-80  flex flex-col"
        >
            <CardHeader>
                <CardTitle
                    className="text-2xl font-bold"
                >
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent
                className="justify-between flex-col flex"
            >
                <CardDescription
                    className="h-40"
                >
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex gap-2 items-center"
                        >
                            {
                                index === 0 ? <CheckIcon
                                    size={14}
                                    color={'#2748E3'}
                                />
                                    : index === 1 ? <MonitorIcon
                                        size={14}
                                        color={'#2748E3'}
                                    />
                                        : index === 2 ? <ArrowDownToLineIcon
                                            size={14}
                                            color={'#2748E3'}
                                        />
                                            : <HeadsetIcon
                                                size={14}
                                                color={'#2748E3'}
                                            />
                            }

                            <p key={index}>{feature}</p>

                        </div>
                    ))}
                </CardDescription>
                <CardDescription
                    className="flex flex-col justify-center items-center "
                >
                    <div
                        className="flex items-center gap-1"
                    >
                        <h1
                            className="text-4xl font-extrabold text-black"
                        >
                            {price}
                        </h1>
                        <p>
                            /{type === 'anual' ? 'ano' : 'mês'}
                        </p>
                    </div>

                    <p>
                        {type === 'anual' && (
                            <span className="text-sm">*em até 12x</span>
                        )}
                    </p>
                </CardDescription>
            </CardContent>
            <CardFooter
                className="justify-center items-end h-full"
            >
                <Button
                    className=" font-bold"
                    style={{
                        backgroundColor: '#2748E3',
                    }}
                >
                    ESCOLHA SEU PLANO
                </Button>
            </CardFooter>
        </Card>
    )
}   