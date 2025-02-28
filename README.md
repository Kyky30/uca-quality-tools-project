Dorian Rochette - Kylian Vinel - Julien Angénieux - Sébastien Combe

# Test de performance

```bash
autocannon -c 50 -d 15 -p 5 http://localhost:3009/posts
```


Running 15s test @ http://localhost:3009/posts
50 connections with 5 pipelining factor


┌─────────┬──────┬──────┬───────┬──────┬──────┬───────┬──────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg  │ Stdev │ Max  │
├─────────┼──────┼──────┼───────┼──────┼──────┼───────┼──────┤
│ Latency │ 0 ms │ 0 ms │ 0 ms  │ 0 ms │ 0 ms │ 0 ms  │ 0 ms │
└─────────┴──────┴──────┴───────┴──────┴──────┴───────┴──────┘
┌───────────┬─────┬──────┬─────┬───────┬─────┬───────┬─────┐
│ Stat      │ 1%  │ 2.5% │ 50% │ 97.5% │ Avg │ Stdev │ Min │
├───────────┼─────┼──────┼─────┼───────┼─────┼───────┼─────┤
│ Req/Sec   │ 0   │ 0    │ 0   │ 0     │ 0   │ 0     │ 0   │
├───────────┼─────┼──────┼─────┼───────┼─────┼───────┼─────┤
│ Bytes/Sec │ 0 B │ 0 B  │ 0 B │ 0 B   │ 0 B │ 0 B   │ 0 B │
└───────────┴─────┴──────┴─────┴───────┴─────┴───────┴─────┘

Req/Bytes counts sampled once per second.
# of samples: 15

859k requests in 15.01s, 0 B read
172k errors (0 timeouts)


Exemple de Situation
Pour un boulanger local, un pic de trafic pourrait survenir lors d'une campagne de marketing en ligne ou d'une offre spéciale, où de nombreux clients potentiels visitent le site pour voir les produits disponibles. En simulant 50 connexions simultanées, vous pouvez évaluer si le serveur peut gérer ce type de charge sans ralentir ou échouer.
