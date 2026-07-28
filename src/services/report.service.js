/*
 *
 */
// MOCK - Simulação de ação de componente de coleta de dados
let reportData = 
{
  "metrics": [
    {
      "title": "Faturamento Mensal",
      "value": "R$ 45.200,50",
      "icon": "payments",
      "color": "green",
      "percentageChange": 12.5
    },
    {
      "title": "Novos Clientes",
      "value": 348,
      "icon": "person_add",
      "color": "blue",
      "percentageChange": 8.2
    },
    {
      "title": "Taxa de Conversão",
      "value": "4.8%",
      "icon": "trending_up",
      "color": "purple",
      "percentageChange": -1.4
    },
    {
      "title": "Pedidos Pendentes",
      "value": 14,
      "icon": "pending_actions",
      "color": "orange",
      "percentageChange": 0.0
    }
  ],
  "recentActivity": [
    {
      "id": "act_01",
      "user": "Carlos Henrique",
      "description": "Finalizou a compra do plano Premium",
      "time": "Há 5 minutos",
      "status": "success"
    },
    {
      "id": "act_02",
      "user": "Ana Beatriz",
      "description": "Abriu um chamado de suporte técnico",
      "time": "Há 22 minutos",
      "status": "warning"
    },
    {
      "id": "act_03",
      "user": "Marcos Silva",
      "description": "Cancelou a assinatura do plano Basic",
      "time": "Há 1 hora",
      "status": "danger"
    }
  ]
}

const reportService = {
    // [READ] - Procedimento para listar todos os reposts
    listarTodos: () => {
        return reportData;
    },

    // [CREATE] - Criação de um novo item
    createReport: (dados) => {
        const newReport = { id: reports.length + 1, ...dados };
        reports.push(newReport);
        return newReport
    }
};

module.exports = reportService;


