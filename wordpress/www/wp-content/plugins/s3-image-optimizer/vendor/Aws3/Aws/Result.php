<?php

namespace S3IO\Aws3\Aws;

use S3IO\Aws3\JmesPath\Env as JmesPath;
/**
 * AWS result.
 */
class Result implements \S3IO\Aws3\Aws\ResultInterface, \S3IO\Aws3\Aws\MonitoringEventsInterface
{
    use HasDataTrait;
    use HasMonitoringEventsTrait;
    public function __construct(array $data = [])
    {
        $this->data = $data;
    }
    public function hasKey($name)
    {
        return isset($this->data[$name]);
    }
    public function get($key)
    {
        return $this[$key];
    }
    public function search($expression)
    {
        return \S3IO\Aws3\JmesPath\Env::search($expression, $this->toArray());
    }
    public function __toString()
    {
        $jsonData = json_encode($this->toArray(), JSON_PRETTY_PRINT);
        return <<<EOT
Model Data
----------
Data can be retrieved from the model object using the get() method of the
model (e.g., `\$result->get(\$key)`) or "accessing the result like an
associative array (e.g. `\$result['key']`). You can also execute JMESPath
expressions on the result data using the search() method.

{$jsonData}

EOT;
    }
    /**
     * @deprecated
     */
    public function getPath($path)
    {
        return $this->search(str_replace('/', '.', $path));
    }
}
