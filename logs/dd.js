
const { NodeTracerProvider } = require('@opentelemetry/node');
const { DatadogSpanProcessor, DatadogExporter, DatadogPropagator, DatadogProbabilitySampler } = require('opentelemetry-exporter-datadog');

const provider = new NodeTracerProvider();

const exporterOptions = {
  serviceName: 'my-service', // optional
  agentUrl: 'http://http-intake.logs.datadoghq.com/v1/input/6966e35accf0cbe7a9d841e5930f0631?ddsource=nodejs&service=csp-eschool-service', // optional
  tags: 'example_key:example_value,example_key_two:value_two', // optional
  env: 'production', // optional
  version: '1.0' // optional
}

const exporter = new DatadogExporter(exporterOptions);

//  Now, register the exporter.

provider.addSpanProcessor(new DatadogSpanProcessor(exporter));

// Next, add the Datadog Propagator for distributed tracing

provider.register({
  propagator: new DatadogPropagator(),
  // while datadog suggests the default ALWAYS_ON sampling, for probability sampling,
  // to ensure the appropriate generation of tracing metrics by the datadog-agent,
  // use the `DatadogProbabilitySampler`
  // sampler: new DatadogProbabilitySampler(0.75)  
})
