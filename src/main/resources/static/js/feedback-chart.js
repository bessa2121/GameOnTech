/* ========================================
   DOCUMENTAÇÃO: JavaScript - Gráfico de Performance
   ========================================
   
   ELEMENTOS MANIPULADOS:
   - Elemento <canvas id="performanceChart">: Canvas onde o gráfico é renderizado
   
   CONFIGURAÇÃO DO GRÁFICO:
   - Tipo: Radar (Rede/Radar chart)
   - Labels: Competências (Código, Comunicação, Pontualidade, etc)
   - Dados: Valores de 0-100 para cada competência
   - Cores: #6b9997 (fundo), #8ab8a8 (linha)
   - Animação: ativada
   
   MÉTODO PRINCIPAL:
   - Chart: Construtor do Chart.js que cria o gráfico
   
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Obtém o contexto do canvas
    const ctx = document.getElementById('performanceChart').getContext('2d');
    
    // Cria o gráfico Radar
    const performanceChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'Qualidade de Código',
                'Comunicação',
                'Pontualidade',
                'Trabalho em Equipe',
                'Aprendizado Rápido',
                'Proatividade'
            ],
            datasets: [{
                label: 'Seu Desempenho',
                data: [82, 88, 95, 90, 85, 72],
                borderColor: '#6b9997',
                backgroundColor: 'rgba(107, 153, 151, 0.2)',
                borderWidth: 2,
                pointBackgroundColor: '#6b9997',
                pointBorderColor: '#8ab8a8',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7
            },
            {
                label: 'Meta',
                data: [85, 85, 90, 85, 85, 80],
                borderColor: '#c6cca5',
                backgroundColor: 'rgba(198, 204, 165, 0.1)',
                borderWidth: 2,
                borderDash: [5, 5],
                pointBackgroundColor: '#c6cca5',
                pointBorderColor: '#8ab8a8',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(107, 153, 151, 0.1)',
                        drawBorder: true
                    },
                    ticks: {
                        color: '#7f8c8d',
                        font: {
                            size: 11
                        },
                        stepSize: 20
                    }
                }
            },
            plugins: {
                tooltip: {
                    backgroundColor: 'rgba(84, 120, 125, 0.9)',
                    padding: 12,
                    titleFont: {
                        size: 12,
                        weight: 'bold'
                    },
                    bodyFont: {
                        size: 12
                    },
                    borderColor: '#6b9997',
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.r;
                        }
                    }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: {
                            size: 12,
                            weight: '500'
                        },
                        color: '#2c3e50',
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                }
            }
        }
    });
});
