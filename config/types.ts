// types.ts
import { RedisClient } from 'redis';

export interface CacheConfig {
  ttl: number;
  retryStrategy: (tries: number, delay: number) => number;
}

export interface RedisClientConfig {
  host: string;
  port: number;
  db: number;
}

export interface RedisConfig {
  client: RedisClientConfig;
  cache: CacheConfig;
}

export interface CacheRedisConfig {
  redis: RedisConfig;
}