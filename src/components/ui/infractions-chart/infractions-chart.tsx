import classNames from 'classnames';
import Highcharts, { Options } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import accessibility from 'highcharts/modules/accessibility';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { Link } from '../link';
import './infractions-chart.scss';

if (typeof Highcharts === 'object') {
  accessibility(Highcharts);
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

  /** Aria label to apply to the graphic */
  ariaLabel?: string;
  /** Aria description to apply to the graphic */
  ariaDescription?: string;
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

  ariaLabel = 'Gráfico de infrações cometidas',
  ariaDescription = 'Gráfico em que as fatias representam o número de infrações cometidas. Cada fatia tem um grau de severidade associado.'
}: InfractionsChartProps) {
  const options: Options = {
    lang: {
      accessibility: {
        chartContainerLabel: ariaLabel,
        graphicContainerLabel: ariaDescription
      }
    },
    credits: { enabled: false },
    chart: {
      height: 224,
      width: 224,
      backgroundColor: 'transparent'
    },
    title: {
      text: '',
      style: {
        height: 0
      }
    },
    series: [
      {
        name: infractionsLabel,
        type: 'pie',
        data: counters.map((c) => ({
          name: c.label,
          y: c.value,
          color: c.color
        })),
        dataLabels: {
          enabled: false
        },
        size: '100%',
        innerSize: '60%'
      }
    ]
  };

  const infractionsTotal = counters.reduce((acc, c) => {
    return acc + c.value;
  }, 0);

  const infractionCounterTitle = `${infractionsTotal} ${infractionsLabel}`;

  const classes = classNames('ama-donut-chart', className, 'position-relative bg-neutral-light p-24 p-md-32 m-0');
  return (
    <Container className={classes}>
      <Row className="mb-24 mb-md-32">
        <Col>
          <h2 className="h5-bold mb-8">{graphicTitle}</h2>
          <div className="text-medium-normal fc-neutral-dark">{graphicDescription}</div>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3 className="h4-bold">{infractionCounterTitle.toLowerCase()}</h3>
        </Col>
      </Row>

      <Row className="d-flex align-items-center justify-content-between mt-16 mt-md-0">
        <Col sm={12} md={6}>
          <ul className="graph-legend">
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
          <HighchartsReact highcharts={Highcharts} options={options} />
        </Col>
      </Row>

      <Row>
        <Col>
          <Link
            link={link}
            title={title}
            isExternal={isExternal}
            className={stretchedLink ? 'text-big-bold stretched-link' : 'text-big-bold font-lato-bold'}
          >
            {linkLabel}
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
