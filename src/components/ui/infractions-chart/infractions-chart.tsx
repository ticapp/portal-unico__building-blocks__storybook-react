import classNames from 'classnames';
import React, { useMemo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ChartOptions, registerables } from 'chart.js';

import { v4 as uuidv4 } from 'uuid';
import { Link } from '../link';
import './infractions-chart.scss';

if (typeof window !== 'undefined') {
  Chart.register(...registerables);
}

export interface InfractionCounter {
  label: string;
  value: number;
  color: string;
}

export interface InfractionsChartProps {
  /** Additional classname for chart */
  className?: string;
  /** Infractions counter */
  counters: InfractionCounter[];
  /** Label to use on graphic legend */
  infractionsLabel?: string;
  /** Infraction details link */
  link?: string;
  /** Link title */
  title?: string;
  /** Link label */
  linkLabel?: string;

  /** Identifies if the link is external */
  isExternal?: boolean;
  /** All panel as clickable area */
  stretchedLink?: boolean;

  /** Title to use in the graphic card */
  graphicTitle?: string;
  /** Description to use in the graphic card */
  graphicDescription?: string;

  /** Width of the square containing the donut pie chart */
  graphicWidth?: number;
  /** Chart intro for accessibility tools */
  graphicFullIntro?: string;
}

export function InfractionsChart({
  className = '',
  counters = [],
  infractionsLabel = 'Infrações',
  link = '/detalhes-infracoes',
  title = 'Detalhes de infrações',
  linkLabel = 'Ver detalhes',
  isExternal = false,
  stretchedLink = false,

  graphicTitle = 'Infrações',
  graphicDescription = 'Consulte o número de infrações associadas à sua carta de condução',

  graphicWidth = 182,

  graphicFullIntro = 'Gráfico circular que mostra o total de infrações cometidas, divididas por gravidade.'
}: InfractionsChartProps) {
  const infractionsTotal = counters.reduce((acc, c) => {
    return acc + c.value;
  }, 0);

  const infractionCounterTitle = `${infractionsTotal} ${infractionsLabel}`;

  const classes = classNames(
    'ama-donut-chart',
    className,
    'd-flex align-items-start flex-column justify-content-between position-relative bg-neutral-light p-24 p-md-32 m-0'
  );

  const buildGraphAriaLabel = useMemo(() => {
    const valuesAccessible = counters
      .map((c) => {
        return `${c.label}: ${c.value}`;
      })
      .join(', ');

    return `${graphicFullIntro} ${valuesAccessible}.`;
  }, [graphicFullIntro, counters]);

  const chartData = {
    label: counters.map((c) => c.label),
    datasets: [
      {
        data: counters.map((c) => c.value),
        backgroundColor: counters.map((c) => c.color)
      }
    ]
  };

  const chartOptions = {
    events: [],
    animation: false
  } as ChartOptions;

  return (
    <Container className={classes}>
      <Row>
        <Row className="mb-24">
          <Col>
            <h2 className="h4-bold mb-8">{graphicTitle}</h2>
            <div className="text-medium-normal fc-neutral-dark">{graphicDescription}</div>
          </Col>
        </Row>

        <div className="row position-relative">
          <Row className="position-absolute top-0">
            <Col>
              <h3 className="h4-bold">{infractionCounterTitle.toLowerCase()}</h3>
            </Col>
          </Row>

          <Row role="img" aria-label={buildGraphAriaLabel} className="d-flex align-items-center justify-content-between mt-32 mt-md-0">
            <Col sm={12} md={6} className="mt-24">
              <ul aria-hidden="true" className="graph-legend">
                {counters.map((c) => {
                  return (
                    <li key={uuidv4()} className="d-flex align-items-center justify-content-start">
                      <div className="marker me-8" style={{ backgroundColor: c.color }} />
                      <div className="legend-item text-medium-normal fc-neutral-dark">{c.label}</div>
                      <div className="ms-8 text-medium-normal fc-neutral-dark">{`(${c.value})`}</div>
                    </li>
                  );
                })}
              </ul>
            </Col>
            <Col sm={12} md={6} className="d-flex align-items-center justify-content-center">
              <div style={{ width: graphicWidth, height: graphicWidth }}>
                <Doughnut options={chartOptions} data={chartData} />
              </div>
            </Col>
          </Row>
        </div>
      </Row>

      <Row>
        <Col>
          <Link
            link={link}
            title={title}
            isExternal={isExternal}
            className={stretchedLink ? 'text-big-bold stretched-link' : 'text-big-bold'}
          >
            {linkLabel}
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
