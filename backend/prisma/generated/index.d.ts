
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Drone
 * 
 */
export type Drone = $Result.DefaultSelection<Prisma.$DronePayload>
/**
 * Model Mission
 * 
 */
export type Mission = $Result.DefaultSelection<Prisma.$MissionPayload>
/**
 * Model MissionFlightPath
 * 
 */
export type MissionFlightPath = $Result.DefaultSelection<Prisma.$MissionFlightPathPayload>
/**
 * Model MissionTelemetry
 * 
 */
export type MissionTelemetry = $Result.DefaultSelection<Prisma.$MissionTelemetryPayload>
/**
 * Model MissionEvent
 * 
 */
export type MissionEvent = $Result.DefaultSelection<Prisma.$MissionEventPayload>
/**
 * Model MissionReport
 * 
 */
export type MissionReport = $Result.DefaultSelection<Prisma.$MissionReportPayload>
/**
 * Model OrganizationMetrics
 * 
 */
export type OrganizationMetrics = $Result.DefaultSelection<Prisma.$OrganizationMetricsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MissionStatus: {
  CREATED: 'CREATED',
  READY: 'READY',
  IN_PROGRESS: 'IN_PROGRESS',
  PAUSED: 'PAUSED',
  COMPLETED: 'COMPLETED',
  ABORTED: 'ABORTED'
};

export type MissionStatus = (typeof MissionStatus)[keyof typeof MissionStatus]


export const MissionPattern: {
  GRID: 'GRID',
  CROSSHATCH: 'CROSSHATCH',
  PERIMETER: 'PERIMETER'
};

export type MissionPattern = (typeof MissionPattern)[keyof typeof MissionPattern]


export const AbortReason: {
  LOW_BATTERY: 'LOW_BATTERY',
  OPERATOR_ABORT: 'OPERATOR_ABORT',
  SYSTEM_ERROR: 'SYSTEM_ERROR'
};

export type AbortReason = (typeof AbortReason)[keyof typeof AbortReason]


export const DroneStatus: {
  AVAILABLE: 'AVAILABLE',
  IN_MISSION: 'IN_MISSION',
  OFFLINE: 'OFFLINE'
};

export type DroneStatus = (typeof DroneStatus)[keyof typeof DroneStatus]

}

export type MissionStatus = $Enums.MissionStatus

export const MissionStatus: typeof $Enums.MissionStatus

export type MissionPattern = $Enums.MissionPattern

export const MissionPattern: typeof $Enums.MissionPattern

export type AbortReason = $Enums.AbortReason

export const AbortReason: typeof $Enums.AbortReason

export type DroneStatus = $Enums.DroneStatus

export const DroneStatus: typeof $Enums.DroneStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Drones
 * const drones = await prisma.drone.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Drones
   * const drones = await prisma.drone.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.drone`: Exposes CRUD operations for the **Drone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drones
    * const drones = await prisma.drone.findMany()
    * ```
    */
  get drone(): Prisma.DroneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mission`: Exposes CRUD operations for the **Mission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Missions
    * const missions = await prisma.mission.findMany()
    * ```
    */
  get mission(): Prisma.MissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.missionFlightPath`: Exposes CRUD operations for the **MissionFlightPath** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MissionFlightPaths
    * const missionFlightPaths = await prisma.missionFlightPath.findMany()
    * ```
    */
  get missionFlightPath(): Prisma.MissionFlightPathDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.missionTelemetry`: Exposes CRUD operations for the **MissionTelemetry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MissionTelemetries
    * const missionTelemetries = await prisma.missionTelemetry.findMany()
    * ```
    */
  get missionTelemetry(): Prisma.MissionTelemetryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.missionEvent`: Exposes CRUD operations for the **MissionEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MissionEvents
    * const missionEvents = await prisma.missionEvent.findMany()
    * ```
    */
  get missionEvent(): Prisma.MissionEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.missionReport`: Exposes CRUD operations for the **MissionReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MissionReports
    * const missionReports = await prisma.missionReport.findMany()
    * ```
    */
  get missionReport(): Prisma.MissionReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizationMetrics`: Exposes CRUD operations for the **OrganizationMetrics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrganizationMetrics
    * const organizationMetrics = await prisma.organizationMetrics.findMany()
    * ```
    */
  get organizationMetrics(): Prisma.OrganizationMetricsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Drone: 'Drone',
    Mission: 'Mission',
    MissionFlightPath: 'MissionFlightPath',
    MissionTelemetry: 'MissionTelemetry',
    MissionEvent: 'MissionEvent',
    MissionReport: 'MissionReport',
    OrganizationMetrics: 'OrganizationMetrics'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "drone" | "mission" | "missionFlightPath" | "missionTelemetry" | "missionEvent" | "missionReport" | "organizationMetrics"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Drone: {
        payload: Prisma.$DronePayload<ExtArgs>
        fields: Prisma.DroneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DroneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DroneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>
          }
          findFirst: {
            args: Prisma.DroneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DroneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>
          }
          findMany: {
            args: Prisma.DroneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>[]
          }
          create: {
            args: Prisma.DroneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>
          }
          createMany: {
            args: Prisma.DroneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DroneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>[]
          }
          delete: {
            args: Prisma.DroneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>
          }
          update: {
            args: Prisma.DroneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>
          }
          deleteMany: {
            args: Prisma.DroneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DroneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DroneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>[]
          }
          upsert: {
            args: Prisma.DroneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>
          }
          aggregate: {
            args: Prisma.DroneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrone>
          }
          groupBy: {
            args: Prisma.DroneGroupByArgs<ExtArgs>
            result: $Utils.Optional<DroneGroupByOutputType>[]
          }
          count: {
            args: Prisma.DroneCountArgs<ExtArgs>
            result: $Utils.Optional<DroneCountAggregateOutputType> | number
          }
        }
      }
      Mission: {
        payload: Prisma.$MissionPayload<ExtArgs>
        fields: Prisma.MissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findFirst: {
            args: Prisma.MissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findMany: {
            args: Prisma.MissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>[]
          }
          create: {
            args: Prisma.MissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          createMany: {
            args: Prisma.MissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>[]
          }
          delete: {
            args: Prisma.MissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          update: {
            args: Prisma.MissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          deleteMany: {
            args: Prisma.MissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>[]
          }
          upsert: {
            args: Prisma.MissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          aggregate: {
            args: Prisma.MissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMission>
          }
          groupBy: {
            args: Prisma.MissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissionCountArgs<ExtArgs>
            result: $Utils.Optional<MissionCountAggregateOutputType> | number
          }
        }
      }
      MissionFlightPath: {
        payload: Prisma.$MissionFlightPathPayload<ExtArgs>
        fields: Prisma.MissionFlightPathFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissionFlightPathFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionFlightPathPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissionFlightPathFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionFlightPathPayload>
          }
          findFirst: {
            args: Prisma.MissionFlightPathFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionFlightPathPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissionFlightPathFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionFlightPathPayload>
          }
          findMany: {
            args: Prisma.MissionFlightPathFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionFlightPathPayload>[]
          }
          create: {
            args: Prisma.MissionFlightPathCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionFlightPathPayload>
          }
          createMany: {
            args: Prisma.MissionFlightPathCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MissionFlightPathCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionFlightPathPayload>[]
          }
          delete: {
            args: Prisma.MissionFlightPathDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionFlightPathPayload>
          }
          update: {
            args: Prisma.MissionFlightPathUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionFlightPathPayload>
          }
          deleteMany: {
            args: Prisma.MissionFlightPathDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissionFlightPathUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MissionFlightPathUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionFlightPathPayload>[]
          }
          upsert: {
            args: Prisma.MissionFlightPathUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionFlightPathPayload>
          }
          aggregate: {
            args: Prisma.MissionFlightPathAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMissionFlightPath>
          }
          groupBy: {
            args: Prisma.MissionFlightPathGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionFlightPathGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissionFlightPathCountArgs<ExtArgs>
            result: $Utils.Optional<MissionFlightPathCountAggregateOutputType> | number
          }
        }
      }
      MissionTelemetry: {
        payload: Prisma.$MissionTelemetryPayload<ExtArgs>
        fields: Prisma.MissionTelemetryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissionTelemetryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionTelemetryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissionTelemetryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionTelemetryPayload>
          }
          findFirst: {
            args: Prisma.MissionTelemetryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionTelemetryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissionTelemetryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionTelemetryPayload>
          }
          findMany: {
            args: Prisma.MissionTelemetryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionTelemetryPayload>[]
          }
          create: {
            args: Prisma.MissionTelemetryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionTelemetryPayload>
          }
          createMany: {
            args: Prisma.MissionTelemetryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MissionTelemetryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionTelemetryPayload>[]
          }
          delete: {
            args: Prisma.MissionTelemetryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionTelemetryPayload>
          }
          update: {
            args: Prisma.MissionTelemetryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionTelemetryPayload>
          }
          deleteMany: {
            args: Prisma.MissionTelemetryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissionTelemetryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MissionTelemetryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionTelemetryPayload>[]
          }
          upsert: {
            args: Prisma.MissionTelemetryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionTelemetryPayload>
          }
          aggregate: {
            args: Prisma.MissionTelemetryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMissionTelemetry>
          }
          groupBy: {
            args: Prisma.MissionTelemetryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionTelemetryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissionTelemetryCountArgs<ExtArgs>
            result: $Utils.Optional<MissionTelemetryCountAggregateOutputType> | number
          }
        }
      }
      MissionEvent: {
        payload: Prisma.$MissionEventPayload<ExtArgs>
        fields: Prisma.MissionEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissionEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissionEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionEventPayload>
          }
          findFirst: {
            args: Prisma.MissionEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissionEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionEventPayload>
          }
          findMany: {
            args: Prisma.MissionEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionEventPayload>[]
          }
          create: {
            args: Prisma.MissionEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionEventPayload>
          }
          createMany: {
            args: Prisma.MissionEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MissionEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionEventPayload>[]
          }
          delete: {
            args: Prisma.MissionEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionEventPayload>
          }
          update: {
            args: Prisma.MissionEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionEventPayload>
          }
          deleteMany: {
            args: Prisma.MissionEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissionEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MissionEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionEventPayload>[]
          }
          upsert: {
            args: Prisma.MissionEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionEventPayload>
          }
          aggregate: {
            args: Prisma.MissionEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMissionEvent>
          }
          groupBy: {
            args: Prisma.MissionEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissionEventCountArgs<ExtArgs>
            result: $Utils.Optional<MissionEventCountAggregateOutputType> | number
          }
        }
      }
      MissionReport: {
        payload: Prisma.$MissionReportPayload<ExtArgs>
        fields: Prisma.MissionReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissionReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissionReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionReportPayload>
          }
          findFirst: {
            args: Prisma.MissionReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissionReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionReportPayload>
          }
          findMany: {
            args: Prisma.MissionReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionReportPayload>[]
          }
          create: {
            args: Prisma.MissionReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionReportPayload>
          }
          createMany: {
            args: Prisma.MissionReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MissionReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionReportPayload>[]
          }
          delete: {
            args: Prisma.MissionReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionReportPayload>
          }
          update: {
            args: Prisma.MissionReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionReportPayload>
          }
          deleteMany: {
            args: Prisma.MissionReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissionReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MissionReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionReportPayload>[]
          }
          upsert: {
            args: Prisma.MissionReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionReportPayload>
          }
          aggregate: {
            args: Prisma.MissionReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMissionReport>
          }
          groupBy: {
            args: Prisma.MissionReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissionReportCountArgs<ExtArgs>
            result: $Utils.Optional<MissionReportCountAggregateOutputType> | number
          }
        }
      }
      OrganizationMetrics: {
        payload: Prisma.$OrganizationMetricsPayload<ExtArgs>
        fields: Prisma.OrganizationMetricsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationMetricsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMetricsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationMetricsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMetricsPayload>
          }
          findFirst: {
            args: Prisma.OrganizationMetricsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMetricsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationMetricsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMetricsPayload>
          }
          findMany: {
            args: Prisma.OrganizationMetricsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMetricsPayload>[]
          }
          create: {
            args: Prisma.OrganizationMetricsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMetricsPayload>
          }
          createMany: {
            args: Prisma.OrganizationMetricsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationMetricsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMetricsPayload>[]
          }
          delete: {
            args: Prisma.OrganizationMetricsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMetricsPayload>
          }
          update: {
            args: Prisma.OrganizationMetricsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMetricsPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationMetricsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationMetricsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationMetricsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMetricsPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationMetricsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMetricsPayload>
          }
          aggregate: {
            args: Prisma.OrganizationMetricsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizationMetrics>
          }
          groupBy: {
            args: Prisma.OrganizationMetricsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationMetricsGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationMetricsCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationMetricsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    drone?: DroneOmit
    mission?: MissionOmit
    missionFlightPath?: MissionFlightPathOmit
    missionTelemetry?: MissionTelemetryOmit
    missionEvent?: MissionEventOmit
    missionReport?: MissionReportOmit
    organizationMetrics?: OrganizationMetricsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DroneCountOutputType
   */

  export type DroneCountOutputType = {
    missions: number
  }

  export type DroneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missions?: boolean | DroneCountOutputTypeCountMissionsArgs
  }

  // Custom InputTypes
  /**
   * DroneCountOutputType without action
   */
  export type DroneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneCountOutputType
     */
    select?: DroneCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DroneCountOutputType without action
   */
  export type DroneCountOutputTypeCountMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
  }


  /**
   * Count Type MissionCountOutputType
   */

  export type MissionCountOutputType = {
    telemetry: number
    events: number
  }

  export type MissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    telemetry?: boolean | MissionCountOutputTypeCountTelemetryArgs
    events?: boolean | MissionCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * MissionCountOutputType without action
   */
  export type MissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionCountOutputType
     */
    select?: MissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MissionCountOutputType without action
   */
  export type MissionCountOutputTypeCountTelemetryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionTelemetryWhereInput
  }

  /**
   * MissionCountOutputType without action
   */
  export type MissionCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Drone
   */

  export type AggregateDrone = {
    _count: DroneCountAggregateOutputType | null
    _avg: DroneAvgAggregateOutputType | null
    _sum: DroneSumAggregateOutputType | null
    _min: DroneMinAggregateOutputType | null
    _max: DroneMaxAggregateOutputType | null
  }

  export type DroneAvgAggregateOutputType = {
    batteryLevel: number | null
    homeBaseLat: number | null
    homeBaseLng: number | null
    maxRange: number | null
  }

  export type DroneSumAggregateOutputType = {
    batteryLevel: number | null
    homeBaseLat: number | null
    homeBaseLng: number | null
    maxRange: number | null
  }

  export type DroneMinAggregateOutputType = {
    id: string | null
    name: string | null
    batteryLevel: number | null
    status: $Enums.DroneStatus | null
    health: string | null
    lastSeenAt: Date | null
    homeBaseLat: number | null
    homeBaseLng: number | null
    maxRange: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DroneMaxAggregateOutputType = {
    id: string | null
    name: string | null
    batteryLevel: number | null
    status: $Enums.DroneStatus | null
    health: string | null
    lastSeenAt: Date | null
    homeBaseLat: number | null
    homeBaseLng: number | null
    maxRange: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DroneCountAggregateOutputType = {
    id: number
    name: number
    batteryLevel: number
    status: number
    health: number
    lastSeenAt: number
    homeBaseLat: number
    homeBaseLng: number
    maxRange: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DroneAvgAggregateInputType = {
    batteryLevel?: true
    homeBaseLat?: true
    homeBaseLng?: true
    maxRange?: true
  }

  export type DroneSumAggregateInputType = {
    batteryLevel?: true
    homeBaseLat?: true
    homeBaseLng?: true
    maxRange?: true
  }

  export type DroneMinAggregateInputType = {
    id?: true
    name?: true
    batteryLevel?: true
    status?: true
    health?: true
    lastSeenAt?: true
    homeBaseLat?: true
    homeBaseLng?: true
    maxRange?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DroneMaxAggregateInputType = {
    id?: true
    name?: true
    batteryLevel?: true
    status?: true
    health?: true
    lastSeenAt?: true
    homeBaseLat?: true
    homeBaseLng?: true
    maxRange?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DroneCountAggregateInputType = {
    id?: true
    name?: true
    batteryLevel?: true
    status?: true
    health?: true
    lastSeenAt?: true
    homeBaseLat?: true
    homeBaseLng?: true
    maxRange?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DroneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drone to aggregate.
     */
    where?: DroneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drones to fetch.
     */
    orderBy?: DroneOrderByWithRelationInput | DroneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DroneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drones
    **/
    _count?: true | DroneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DroneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DroneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DroneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DroneMaxAggregateInputType
  }

  export type GetDroneAggregateType<T extends DroneAggregateArgs> = {
        [P in keyof T & keyof AggregateDrone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrone[P]>
      : GetScalarType<T[P], AggregateDrone[P]>
  }




  export type DroneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DroneWhereInput
    orderBy?: DroneOrderByWithAggregationInput | DroneOrderByWithAggregationInput[]
    by: DroneScalarFieldEnum[] | DroneScalarFieldEnum
    having?: DroneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DroneCountAggregateInputType | true
    _avg?: DroneAvgAggregateInputType
    _sum?: DroneSumAggregateInputType
    _min?: DroneMinAggregateInputType
    _max?: DroneMaxAggregateInputType
  }

  export type DroneGroupByOutputType = {
    id: string
    name: string
    batteryLevel: number
    status: $Enums.DroneStatus
    health: string
    lastSeenAt: Date | null
    homeBaseLat: number
    homeBaseLng: number
    maxRange: number
    createdAt: Date
    updatedAt: Date
    _count: DroneCountAggregateOutputType | null
    _avg: DroneAvgAggregateOutputType | null
    _sum: DroneSumAggregateOutputType | null
    _min: DroneMinAggregateOutputType | null
    _max: DroneMaxAggregateOutputType | null
  }

  type GetDroneGroupByPayload<T extends DroneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DroneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DroneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DroneGroupByOutputType[P]>
            : GetScalarType<T[P], DroneGroupByOutputType[P]>
        }
      >
    >


  export type DroneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    batteryLevel?: boolean
    status?: boolean
    health?: boolean
    lastSeenAt?: boolean
    homeBaseLat?: boolean
    homeBaseLng?: boolean
    maxRange?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    missions?: boolean | Drone$missionsArgs<ExtArgs>
    _count?: boolean | DroneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drone"]>

  export type DroneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    batteryLevel?: boolean
    status?: boolean
    health?: boolean
    lastSeenAt?: boolean
    homeBaseLat?: boolean
    homeBaseLng?: boolean
    maxRange?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["drone"]>

  export type DroneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    batteryLevel?: boolean
    status?: boolean
    health?: boolean
    lastSeenAt?: boolean
    homeBaseLat?: boolean
    homeBaseLng?: boolean
    maxRange?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["drone"]>

  export type DroneSelectScalar = {
    id?: boolean
    name?: boolean
    batteryLevel?: boolean
    status?: boolean
    health?: boolean
    lastSeenAt?: boolean
    homeBaseLat?: boolean
    homeBaseLng?: boolean
    maxRange?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DroneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "batteryLevel" | "status" | "health" | "lastSeenAt" | "homeBaseLat" | "homeBaseLng" | "maxRange" | "createdAt" | "updatedAt", ExtArgs["result"]["drone"]>
  export type DroneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missions?: boolean | Drone$missionsArgs<ExtArgs>
    _count?: boolean | DroneCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DroneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DroneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DronePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Drone"
    objects: {
      missions: Prisma.$MissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      batteryLevel: number
      status: $Enums.DroneStatus
      health: string
      lastSeenAt: Date | null
      homeBaseLat: number
      homeBaseLng: number
      maxRange: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["drone"]>
    composites: {}
  }

  type DroneGetPayload<S extends boolean | null | undefined | DroneDefaultArgs> = $Result.GetResult<Prisma.$DronePayload, S>

  type DroneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DroneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DroneCountAggregateInputType | true
    }

  export interface DroneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Drone'], meta: { name: 'Drone' } }
    /**
     * Find zero or one Drone that matches the filter.
     * @param {DroneFindUniqueArgs} args - Arguments to find a Drone
     * @example
     * // Get one Drone
     * const drone = await prisma.drone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DroneFindUniqueArgs>(args: SelectSubset<T, DroneFindUniqueArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Drone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DroneFindUniqueOrThrowArgs} args - Arguments to find a Drone
     * @example
     * // Get one Drone
     * const drone = await prisma.drone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DroneFindUniqueOrThrowArgs>(args: SelectSubset<T, DroneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneFindFirstArgs} args - Arguments to find a Drone
     * @example
     * // Get one Drone
     * const drone = await prisma.drone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DroneFindFirstArgs>(args?: SelectSubset<T, DroneFindFirstArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneFindFirstOrThrowArgs} args - Arguments to find a Drone
     * @example
     * // Get one Drone
     * const drone = await prisma.drone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DroneFindFirstOrThrowArgs>(args?: SelectSubset<T, DroneFindFirstOrThrowArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drones
     * const drones = await prisma.drone.findMany()
     * 
     * // Get first 10 Drones
     * const drones = await prisma.drone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const droneWithIdOnly = await prisma.drone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DroneFindManyArgs>(args?: SelectSubset<T, DroneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Drone.
     * @param {DroneCreateArgs} args - Arguments to create a Drone.
     * @example
     * // Create one Drone
     * const Drone = await prisma.drone.create({
     *   data: {
     *     // ... data to create a Drone
     *   }
     * })
     * 
     */
    create<T extends DroneCreateArgs>(args: SelectSubset<T, DroneCreateArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drones.
     * @param {DroneCreateManyArgs} args - Arguments to create many Drones.
     * @example
     * // Create many Drones
     * const drone = await prisma.drone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DroneCreateManyArgs>(args?: SelectSubset<T, DroneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drones and returns the data saved in the database.
     * @param {DroneCreateManyAndReturnArgs} args - Arguments to create many Drones.
     * @example
     * // Create many Drones
     * const drone = await prisma.drone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drones and only return the `id`
     * const droneWithIdOnly = await prisma.drone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DroneCreateManyAndReturnArgs>(args?: SelectSubset<T, DroneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Drone.
     * @param {DroneDeleteArgs} args - Arguments to delete one Drone.
     * @example
     * // Delete one Drone
     * const Drone = await prisma.drone.delete({
     *   where: {
     *     // ... filter to delete one Drone
     *   }
     * })
     * 
     */
    delete<T extends DroneDeleteArgs>(args: SelectSubset<T, DroneDeleteArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Drone.
     * @param {DroneUpdateArgs} args - Arguments to update one Drone.
     * @example
     * // Update one Drone
     * const drone = await prisma.drone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DroneUpdateArgs>(args: SelectSubset<T, DroneUpdateArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drones.
     * @param {DroneDeleteManyArgs} args - Arguments to filter Drones to delete.
     * @example
     * // Delete a few Drones
     * const { count } = await prisma.drone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DroneDeleteManyArgs>(args?: SelectSubset<T, DroneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drones
     * const drone = await prisma.drone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DroneUpdateManyArgs>(args: SelectSubset<T, DroneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drones and returns the data updated in the database.
     * @param {DroneUpdateManyAndReturnArgs} args - Arguments to update many Drones.
     * @example
     * // Update many Drones
     * const drone = await prisma.drone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drones and only return the `id`
     * const droneWithIdOnly = await prisma.drone.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DroneUpdateManyAndReturnArgs>(args: SelectSubset<T, DroneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Drone.
     * @param {DroneUpsertArgs} args - Arguments to update or create a Drone.
     * @example
     * // Update or create a Drone
     * const drone = await prisma.drone.upsert({
     *   create: {
     *     // ... data to create a Drone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Drone we want to update
     *   }
     * })
     */
    upsert<T extends DroneUpsertArgs>(args: SelectSubset<T, DroneUpsertArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneCountArgs} args - Arguments to filter Drones to count.
     * @example
     * // Count the number of Drones
     * const count = await prisma.drone.count({
     *   where: {
     *     // ... the filter for the Drones we want to count
     *   }
     * })
    **/
    count<T extends DroneCountArgs>(
      args?: Subset<T, DroneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DroneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Drone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DroneAggregateArgs>(args: Subset<T, DroneAggregateArgs>): Prisma.PrismaPromise<GetDroneAggregateType<T>>

    /**
     * Group by Drone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DroneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DroneGroupByArgs['orderBy'] }
        : { orderBy?: DroneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DroneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDroneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Drone model
   */
  readonly fields: DroneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Drone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DroneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    missions<T extends Drone$missionsArgs<ExtArgs> = {}>(args?: Subset<T, Drone$missionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Drone model
   */
  interface DroneFieldRefs {
    readonly id: FieldRef<"Drone", 'String'>
    readonly name: FieldRef<"Drone", 'String'>
    readonly batteryLevel: FieldRef<"Drone", 'Int'>
    readonly status: FieldRef<"Drone", 'DroneStatus'>
    readonly health: FieldRef<"Drone", 'String'>
    readonly lastSeenAt: FieldRef<"Drone", 'DateTime'>
    readonly homeBaseLat: FieldRef<"Drone", 'Float'>
    readonly homeBaseLng: FieldRef<"Drone", 'Float'>
    readonly maxRange: FieldRef<"Drone", 'Float'>
    readonly createdAt: FieldRef<"Drone", 'DateTime'>
    readonly updatedAt: FieldRef<"Drone", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Drone findUnique
   */
  export type DroneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * Filter, which Drone to fetch.
     */
    where: DroneWhereUniqueInput
  }

  /**
   * Drone findUniqueOrThrow
   */
  export type DroneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * Filter, which Drone to fetch.
     */
    where: DroneWhereUniqueInput
  }

  /**
   * Drone findFirst
   */
  export type DroneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * Filter, which Drone to fetch.
     */
    where?: DroneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drones to fetch.
     */
    orderBy?: DroneOrderByWithRelationInput | DroneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drones.
     */
    cursor?: DroneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drones.
     */
    distinct?: DroneScalarFieldEnum | DroneScalarFieldEnum[]
  }

  /**
   * Drone findFirstOrThrow
   */
  export type DroneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * Filter, which Drone to fetch.
     */
    where?: DroneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drones to fetch.
     */
    orderBy?: DroneOrderByWithRelationInput | DroneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drones.
     */
    cursor?: DroneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drones.
     */
    distinct?: DroneScalarFieldEnum | DroneScalarFieldEnum[]
  }

  /**
   * Drone findMany
   */
  export type DroneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * Filter, which Drones to fetch.
     */
    where?: DroneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drones to fetch.
     */
    orderBy?: DroneOrderByWithRelationInput | DroneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drones.
     */
    cursor?: DroneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drones.
     */
    skip?: number
    distinct?: DroneScalarFieldEnum | DroneScalarFieldEnum[]
  }

  /**
   * Drone create
   */
  export type DroneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * The data needed to create a Drone.
     */
    data: XOR<DroneCreateInput, DroneUncheckedCreateInput>
  }

  /**
   * Drone createMany
   */
  export type DroneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drones.
     */
    data: DroneCreateManyInput | DroneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Drone createManyAndReturn
   */
  export type DroneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * The data used to create many Drones.
     */
    data: DroneCreateManyInput | DroneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Drone update
   */
  export type DroneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * The data needed to update a Drone.
     */
    data: XOR<DroneUpdateInput, DroneUncheckedUpdateInput>
    /**
     * Choose, which Drone to update.
     */
    where: DroneWhereUniqueInput
  }

  /**
   * Drone updateMany
   */
  export type DroneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drones.
     */
    data: XOR<DroneUpdateManyMutationInput, DroneUncheckedUpdateManyInput>
    /**
     * Filter which Drones to update
     */
    where?: DroneWhereInput
    /**
     * Limit how many Drones to update.
     */
    limit?: number
  }

  /**
   * Drone updateManyAndReturn
   */
  export type DroneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * The data used to update Drones.
     */
    data: XOR<DroneUpdateManyMutationInput, DroneUncheckedUpdateManyInput>
    /**
     * Filter which Drones to update
     */
    where?: DroneWhereInput
    /**
     * Limit how many Drones to update.
     */
    limit?: number
  }

  /**
   * Drone upsert
   */
  export type DroneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * The filter to search for the Drone to update in case it exists.
     */
    where: DroneWhereUniqueInput
    /**
     * In case the Drone found by the `where` argument doesn't exist, create a new Drone with this data.
     */
    create: XOR<DroneCreateInput, DroneUncheckedCreateInput>
    /**
     * In case the Drone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DroneUpdateInput, DroneUncheckedUpdateInput>
  }

  /**
   * Drone delete
   */
  export type DroneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * Filter which Drone to delete.
     */
    where: DroneWhereUniqueInput
  }

  /**
   * Drone deleteMany
   */
  export type DroneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drones to delete
     */
    where?: DroneWhereInput
    /**
     * Limit how many Drones to delete.
     */
    limit?: number
  }

  /**
   * Drone.missions
   */
  export type Drone$missionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    cursor?: MissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Drone without action
   */
  export type DroneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
  }


  /**
   * Model Mission
   */

  export type AggregateMission = {
    _count: MissionCountAggregateOutputType | null
    _avg: MissionAvgAggregateOutputType | null
    _sum: MissionSumAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  export type MissionAvgAggregateOutputType = {
    altitude: number | null
    overlapPercentage: number | null
    speed: number | null
  }

  export type MissionSumAggregateOutputType = {
    altitude: number | null
    overlapPercentage: number | null
    speed: number | null
  }

  export type MissionMinAggregateOutputType = {
    id: string | null
    name: string | null
    status: $Enums.MissionStatus | null
    pattern: $Enums.MissionPattern | null
    altitude: number | null
    overlapPercentage: number | null
    speed: number | null
    assignedDroneId: string | null
    abortReason: $Enums.AbortReason | null
    abortReasonText: string | null
    phase: string | null
    phaseStartedAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
    pausedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MissionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    status: $Enums.MissionStatus | null
    pattern: $Enums.MissionPattern | null
    altitude: number | null
    overlapPercentage: number | null
    speed: number | null
    assignedDroneId: string | null
    abortReason: $Enums.AbortReason | null
    abortReasonText: string | null
    phase: string | null
    phaseStartedAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
    pausedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MissionCountAggregateOutputType = {
    id: number
    name: number
    status: number
    pattern: number
    altitude: number
    overlapPercentage: number
    speed: number
    surveyArea: number
    patternConfig: number
    assignedDroneId: number
    abortReason: number
    abortReasonText: number
    phase: number
    phaseStartedAt: number
    startedAt: number
    completedAt: number
    pausedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MissionAvgAggregateInputType = {
    altitude?: true
    overlapPercentage?: true
    speed?: true
  }

  export type MissionSumAggregateInputType = {
    altitude?: true
    overlapPercentage?: true
    speed?: true
  }

  export type MissionMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    pattern?: true
    altitude?: true
    overlapPercentage?: true
    speed?: true
    assignedDroneId?: true
    abortReason?: true
    abortReasonText?: true
    phase?: true
    phaseStartedAt?: true
    startedAt?: true
    completedAt?: true
    pausedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MissionMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    pattern?: true
    altitude?: true
    overlapPercentage?: true
    speed?: true
    assignedDroneId?: true
    abortReason?: true
    abortReasonText?: true
    phase?: true
    phaseStartedAt?: true
    startedAt?: true
    completedAt?: true
    pausedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MissionCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    pattern?: true
    altitude?: true
    overlapPercentage?: true
    speed?: true
    surveyArea?: true
    patternConfig?: true
    assignedDroneId?: true
    abortReason?: true
    abortReasonText?: true
    phase?: true
    phaseStartedAt?: true
    startedAt?: true
    completedAt?: true
    pausedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mission to aggregate.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Missions
    **/
    _count?: true | MissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionMaxAggregateInputType
  }

  export type GetMissionAggregateType<T extends MissionAggregateArgs> = {
        [P in keyof T & keyof AggregateMission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMission[P]>
      : GetScalarType<T[P], AggregateMission[P]>
  }




  export type MissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithAggregationInput | MissionOrderByWithAggregationInput[]
    by: MissionScalarFieldEnum[] | MissionScalarFieldEnum
    having?: MissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionCountAggregateInputType | true
    _avg?: MissionAvgAggregateInputType
    _sum?: MissionSumAggregateInputType
    _min?: MissionMinAggregateInputType
    _max?: MissionMaxAggregateInputType
  }

  export type MissionGroupByOutputType = {
    id: string
    name: string
    status: $Enums.MissionStatus
    pattern: $Enums.MissionPattern
    altitude: number
    overlapPercentage: number
    speed: number
    surveyArea: JsonValue
    patternConfig: JsonValue | null
    assignedDroneId: string | null
    abortReason: $Enums.AbortReason | null
    abortReasonText: string | null
    phase: string | null
    phaseStartedAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
    pausedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: MissionCountAggregateOutputType | null
    _avg: MissionAvgAggregateOutputType | null
    _sum: MissionSumAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  type GetMissionGroupByPayload<T extends MissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionGroupByOutputType[P]>
            : GetScalarType<T[P], MissionGroupByOutputType[P]>
        }
      >
    >


  export type MissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    pattern?: boolean
    altitude?: boolean
    overlapPercentage?: boolean
    speed?: boolean
    surveyArea?: boolean
    patternConfig?: boolean
    assignedDroneId?: boolean
    abortReason?: boolean
    abortReasonText?: boolean
    phase?: boolean
    phaseStartedAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    pausedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignedDrone?: boolean | Mission$assignedDroneArgs<ExtArgs>
    flightPath?: boolean | Mission$flightPathArgs<ExtArgs>
    telemetry?: boolean | Mission$telemetryArgs<ExtArgs>
    events?: boolean | Mission$eventsArgs<ExtArgs>
    report?: boolean | Mission$reportArgs<ExtArgs>
    _count?: boolean | MissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mission"]>

  export type MissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    pattern?: boolean
    altitude?: boolean
    overlapPercentage?: boolean
    speed?: boolean
    surveyArea?: boolean
    patternConfig?: boolean
    assignedDroneId?: boolean
    abortReason?: boolean
    abortReasonText?: boolean
    phase?: boolean
    phaseStartedAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    pausedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignedDrone?: boolean | Mission$assignedDroneArgs<ExtArgs>
  }, ExtArgs["result"]["mission"]>

  export type MissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    pattern?: boolean
    altitude?: boolean
    overlapPercentage?: boolean
    speed?: boolean
    surveyArea?: boolean
    patternConfig?: boolean
    assignedDroneId?: boolean
    abortReason?: boolean
    abortReasonText?: boolean
    phase?: boolean
    phaseStartedAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    pausedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignedDrone?: boolean | Mission$assignedDroneArgs<ExtArgs>
  }, ExtArgs["result"]["mission"]>

  export type MissionSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    pattern?: boolean
    altitude?: boolean
    overlapPercentage?: boolean
    speed?: boolean
    surveyArea?: boolean
    patternConfig?: boolean
    assignedDroneId?: boolean
    abortReason?: boolean
    abortReasonText?: boolean
    phase?: boolean
    phaseStartedAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    pausedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status" | "pattern" | "altitude" | "overlapPercentage" | "speed" | "surveyArea" | "patternConfig" | "assignedDroneId" | "abortReason" | "abortReasonText" | "phase" | "phaseStartedAt" | "startedAt" | "completedAt" | "pausedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["mission"]>
  export type MissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedDrone?: boolean | Mission$assignedDroneArgs<ExtArgs>
    flightPath?: boolean | Mission$flightPathArgs<ExtArgs>
    telemetry?: boolean | Mission$telemetryArgs<ExtArgs>
    events?: boolean | Mission$eventsArgs<ExtArgs>
    report?: boolean | Mission$reportArgs<ExtArgs>
    _count?: boolean | MissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedDrone?: boolean | Mission$assignedDroneArgs<ExtArgs>
  }
  export type MissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedDrone?: boolean | Mission$assignedDroneArgs<ExtArgs>
  }

  export type $MissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mission"
    objects: {
      assignedDrone: Prisma.$DronePayload<ExtArgs> | null
      flightPath: Prisma.$MissionFlightPathPayload<ExtArgs> | null
      telemetry: Prisma.$MissionTelemetryPayload<ExtArgs>[]
      events: Prisma.$MissionEventPayload<ExtArgs>[]
      report: Prisma.$MissionReportPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      status: $Enums.MissionStatus
      pattern: $Enums.MissionPattern
      altitude: number
      overlapPercentage: number
      speed: number
      surveyArea: Prisma.JsonValue
      patternConfig: Prisma.JsonValue | null
      assignedDroneId: string | null
      abortReason: $Enums.AbortReason | null
      abortReasonText: string | null
      phase: string | null
      phaseStartedAt: Date | null
      startedAt: Date | null
      completedAt: Date | null
      pausedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mission"]>
    composites: {}
  }

  type MissionGetPayload<S extends boolean | null | undefined | MissionDefaultArgs> = $Result.GetResult<Prisma.$MissionPayload, S>

  type MissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissionCountAggregateInputType | true
    }

  export interface MissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mission'], meta: { name: 'Mission' } }
    /**
     * Find zero or one Mission that matches the filter.
     * @param {MissionFindUniqueArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionFindUniqueArgs>(args: SelectSubset<T, MissionFindUniqueArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionFindUniqueOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionFindUniqueOrThrowArgs>(args: SelectSubset<T, MissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionFindFirstArgs>(args?: SelectSubset<T, MissionFindFirstArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionFindFirstOrThrowArgs>(args?: SelectSubset<T, MissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Missions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Missions
     * const missions = await prisma.mission.findMany()
     * 
     * // Get first 10 Missions
     * const missions = await prisma.mission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missionWithIdOnly = await prisma.mission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MissionFindManyArgs>(args?: SelectSubset<T, MissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mission.
     * @param {MissionCreateArgs} args - Arguments to create a Mission.
     * @example
     * // Create one Mission
     * const Mission = await prisma.mission.create({
     *   data: {
     *     // ... data to create a Mission
     *   }
     * })
     * 
     */
    create<T extends MissionCreateArgs>(args: SelectSubset<T, MissionCreateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Missions.
     * @param {MissionCreateManyArgs} args - Arguments to create many Missions.
     * @example
     * // Create many Missions
     * const mission = await prisma.mission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissionCreateManyArgs>(args?: SelectSubset<T, MissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Missions and returns the data saved in the database.
     * @param {MissionCreateManyAndReturnArgs} args - Arguments to create many Missions.
     * @example
     * // Create many Missions
     * const mission = await prisma.mission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Missions and only return the `id`
     * const missionWithIdOnly = await prisma.mission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MissionCreateManyAndReturnArgs>(args?: SelectSubset<T, MissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mission.
     * @param {MissionDeleteArgs} args - Arguments to delete one Mission.
     * @example
     * // Delete one Mission
     * const Mission = await prisma.mission.delete({
     *   where: {
     *     // ... filter to delete one Mission
     *   }
     * })
     * 
     */
    delete<T extends MissionDeleteArgs>(args: SelectSubset<T, MissionDeleteArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mission.
     * @param {MissionUpdateArgs} args - Arguments to update one Mission.
     * @example
     * // Update one Mission
     * const mission = await prisma.mission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissionUpdateArgs>(args: SelectSubset<T, MissionUpdateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Missions.
     * @param {MissionDeleteManyArgs} args - Arguments to filter Missions to delete.
     * @example
     * // Delete a few Missions
     * const { count } = await prisma.mission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissionDeleteManyArgs>(args?: SelectSubset<T, MissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Missions
     * const mission = await prisma.mission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissionUpdateManyArgs>(args: SelectSubset<T, MissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missions and returns the data updated in the database.
     * @param {MissionUpdateManyAndReturnArgs} args - Arguments to update many Missions.
     * @example
     * // Update many Missions
     * const mission = await prisma.mission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Missions and only return the `id`
     * const missionWithIdOnly = await prisma.mission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MissionUpdateManyAndReturnArgs>(args: SelectSubset<T, MissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mission.
     * @param {MissionUpsertArgs} args - Arguments to update or create a Mission.
     * @example
     * // Update or create a Mission
     * const mission = await prisma.mission.upsert({
     *   create: {
     *     // ... data to create a Mission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mission we want to update
     *   }
     * })
     */
    upsert<T extends MissionUpsertArgs>(args: SelectSubset<T, MissionUpsertArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionCountArgs} args - Arguments to filter Missions to count.
     * @example
     * // Count the number of Missions
     * const count = await prisma.mission.count({
     *   where: {
     *     // ... the filter for the Missions we want to count
     *   }
     * })
    **/
    count<T extends MissionCountArgs>(
      args?: Subset<T, MissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MissionAggregateArgs>(args: Subset<T, MissionAggregateArgs>): Prisma.PrismaPromise<GetMissionAggregateType<T>>

    /**
     * Group by Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissionGroupByArgs['orderBy'] }
        : { orderBy?: MissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mission model
   */
  readonly fields: MissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignedDrone<T extends Mission$assignedDroneArgs<ExtArgs> = {}>(args?: Subset<T, Mission$assignedDroneArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    flightPath<T extends Mission$flightPathArgs<ExtArgs> = {}>(args?: Subset<T, Mission$flightPathArgs<ExtArgs>>): Prisma__MissionFlightPathClient<$Result.GetResult<Prisma.$MissionFlightPathPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    telemetry<T extends Mission$telemetryArgs<ExtArgs> = {}>(args?: Subset<T, Mission$telemetryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionTelemetryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends Mission$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Mission$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    report<T extends Mission$reportArgs<ExtArgs> = {}>(args?: Subset<T, Mission$reportArgs<ExtArgs>>): Prisma__MissionReportClient<$Result.GetResult<Prisma.$MissionReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mission model
   */
  interface MissionFieldRefs {
    readonly id: FieldRef<"Mission", 'String'>
    readonly name: FieldRef<"Mission", 'String'>
    readonly status: FieldRef<"Mission", 'MissionStatus'>
    readonly pattern: FieldRef<"Mission", 'MissionPattern'>
    readonly altitude: FieldRef<"Mission", 'Int'>
    readonly overlapPercentage: FieldRef<"Mission", 'Int'>
    readonly speed: FieldRef<"Mission", 'Int'>
    readonly surveyArea: FieldRef<"Mission", 'Json'>
    readonly patternConfig: FieldRef<"Mission", 'Json'>
    readonly assignedDroneId: FieldRef<"Mission", 'String'>
    readonly abortReason: FieldRef<"Mission", 'AbortReason'>
    readonly abortReasonText: FieldRef<"Mission", 'String'>
    readonly phase: FieldRef<"Mission", 'String'>
    readonly phaseStartedAt: FieldRef<"Mission", 'DateTime'>
    readonly startedAt: FieldRef<"Mission", 'DateTime'>
    readonly completedAt: FieldRef<"Mission", 'DateTime'>
    readonly pausedAt: FieldRef<"Mission", 'DateTime'>
    readonly createdAt: FieldRef<"Mission", 'DateTime'>
    readonly updatedAt: FieldRef<"Mission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mission findUnique
   */
  export type MissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission findUniqueOrThrow
   */
  export type MissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission findFirst
   */
  export type MissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission findFirstOrThrow
   */
  export type MissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission findMany
   */
  export type MissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Missions to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission create
   */
  export type MissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Mission.
     */
    data: XOR<MissionCreateInput, MissionUncheckedCreateInput>
  }

  /**
   * Mission createMany
   */
  export type MissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Missions.
     */
    data: MissionCreateManyInput | MissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mission createManyAndReturn
   */
  export type MissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * The data used to create many Missions.
     */
    data: MissionCreateManyInput | MissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mission update
   */
  export type MissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Mission.
     */
    data: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
    /**
     * Choose, which Mission to update.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission updateMany
   */
  export type MissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Missions.
     */
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyInput>
    /**
     * Filter which Missions to update
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to update.
     */
    limit?: number
  }

  /**
   * Mission updateManyAndReturn
   */
  export type MissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * The data used to update Missions.
     */
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyInput>
    /**
     * Filter which Missions to update
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mission upsert
   */
  export type MissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Mission to update in case it exists.
     */
    where: MissionWhereUniqueInput
    /**
     * In case the Mission found by the `where` argument doesn't exist, create a new Mission with this data.
     */
    create: XOR<MissionCreateInput, MissionUncheckedCreateInput>
    /**
     * In case the Mission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
  }

  /**
   * Mission delete
   */
  export type MissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter which Mission to delete.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission deleteMany
   */
  export type MissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Missions to delete
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to delete.
     */
    limit?: number
  }

  /**
   * Mission.assignedDrone
   */
  export type Mission$assignedDroneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    where?: DroneWhereInput
  }

  /**
   * Mission.flightPath
   */
  export type Mission$flightPathArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionFlightPath
     */
    select?: MissionFlightPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionFlightPath
     */
    omit?: MissionFlightPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionFlightPathInclude<ExtArgs> | null
    where?: MissionFlightPathWhereInput
  }

  /**
   * Mission.telemetry
   */
  export type Mission$telemetryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionTelemetry
     */
    select?: MissionTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionTelemetry
     */
    omit?: MissionTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionTelemetryInclude<ExtArgs> | null
    where?: MissionTelemetryWhereInput
    orderBy?: MissionTelemetryOrderByWithRelationInput | MissionTelemetryOrderByWithRelationInput[]
    cursor?: MissionTelemetryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionTelemetryScalarFieldEnum | MissionTelemetryScalarFieldEnum[]
  }

  /**
   * Mission.events
   */
  export type Mission$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionEvent
     */
    select?: MissionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionEvent
     */
    omit?: MissionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionEventInclude<ExtArgs> | null
    where?: MissionEventWhereInput
    orderBy?: MissionEventOrderByWithRelationInput | MissionEventOrderByWithRelationInput[]
    cursor?: MissionEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionEventScalarFieldEnum | MissionEventScalarFieldEnum[]
  }

  /**
   * Mission.report
   */
  export type Mission$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionReport
     */
    select?: MissionReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionReport
     */
    omit?: MissionReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionReportInclude<ExtArgs> | null
    where?: MissionReportWhereInput
  }

  /**
   * Mission without action
   */
  export type MissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
  }


  /**
   * Model MissionFlightPath
   */

  export type AggregateMissionFlightPath = {
    _count: MissionFlightPathCountAggregateOutputType | null
    _avg: MissionFlightPathAvgAggregateOutputType | null
    _sum: MissionFlightPathSumAggregateOutputType | null
    _min: MissionFlightPathMinAggregateOutputType | null
    _max: MissionFlightPathMaxAggregateOutputType | null
  }

  export type MissionFlightPathAvgAggregateOutputType = {
    waypointCount: number | null
    estimatedDistanceMeters: number | null
    estimatedDurationSeconds: number | null
  }

  export type MissionFlightPathSumAggregateOutputType = {
    waypointCount: number | null
    estimatedDistanceMeters: number | null
    estimatedDurationSeconds: number | null
  }

  export type MissionFlightPathMinAggregateOutputType = {
    id: string | null
    missionId: string | null
    waypointCount: number | null
    estimatedDistanceMeters: number | null
    estimatedDurationSeconds: number | null
    createdAt: Date | null
  }

  export type MissionFlightPathMaxAggregateOutputType = {
    id: string | null
    missionId: string | null
    waypointCount: number | null
    estimatedDistanceMeters: number | null
    estimatedDurationSeconds: number | null
    createdAt: Date | null
  }

  export type MissionFlightPathCountAggregateOutputType = {
    id: number
    missionId: number
    waypoints: number
    waypointCount: number
    estimatedDistanceMeters: number
    estimatedDurationSeconds: number
    createdAt: number
    _all: number
  }


  export type MissionFlightPathAvgAggregateInputType = {
    waypointCount?: true
    estimatedDistanceMeters?: true
    estimatedDurationSeconds?: true
  }

  export type MissionFlightPathSumAggregateInputType = {
    waypointCount?: true
    estimatedDistanceMeters?: true
    estimatedDurationSeconds?: true
  }

  export type MissionFlightPathMinAggregateInputType = {
    id?: true
    missionId?: true
    waypointCount?: true
    estimatedDistanceMeters?: true
    estimatedDurationSeconds?: true
    createdAt?: true
  }

  export type MissionFlightPathMaxAggregateInputType = {
    id?: true
    missionId?: true
    waypointCount?: true
    estimatedDistanceMeters?: true
    estimatedDurationSeconds?: true
    createdAt?: true
  }

  export type MissionFlightPathCountAggregateInputType = {
    id?: true
    missionId?: true
    waypoints?: true
    waypointCount?: true
    estimatedDistanceMeters?: true
    estimatedDurationSeconds?: true
    createdAt?: true
    _all?: true
  }

  export type MissionFlightPathAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissionFlightPath to aggregate.
     */
    where?: MissionFlightPathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionFlightPaths to fetch.
     */
    orderBy?: MissionFlightPathOrderByWithRelationInput | MissionFlightPathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissionFlightPathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionFlightPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionFlightPaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MissionFlightPaths
    **/
    _count?: true | MissionFlightPathCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MissionFlightPathAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MissionFlightPathSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionFlightPathMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionFlightPathMaxAggregateInputType
  }

  export type GetMissionFlightPathAggregateType<T extends MissionFlightPathAggregateArgs> = {
        [P in keyof T & keyof AggregateMissionFlightPath]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMissionFlightPath[P]>
      : GetScalarType<T[P], AggregateMissionFlightPath[P]>
  }




  export type MissionFlightPathGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionFlightPathWhereInput
    orderBy?: MissionFlightPathOrderByWithAggregationInput | MissionFlightPathOrderByWithAggregationInput[]
    by: MissionFlightPathScalarFieldEnum[] | MissionFlightPathScalarFieldEnum
    having?: MissionFlightPathScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionFlightPathCountAggregateInputType | true
    _avg?: MissionFlightPathAvgAggregateInputType
    _sum?: MissionFlightPathSumAggregateInputType
    _min?: MissionFlightPathMinAggregateInputType
    _max?: MissionFlightPathMaxAggregateInputType
  }

  export type MissionFlightPathGroupByOutputType = {
    id: string
    missionId: string
    waypoints: JsonValue
    waypointCount: number
    estimatedDistanceMeters: number
    estimatedDurationSeconds: number
    createdAt: Date
    _count: MissionFlightPathCountAggregateOutputType | null
    _avg: MissionFlightPathAvgAggregateOutputType | null
    _sum: MissionFlightPathSumAggregateOutputType | null
    _min: MissionFlightPathMinAggregateOutputType | null
    _max: MissionFlightPathMaxAggregateOutputType | null
  }

  type GetMissionFlightPathGroupByPayload<T extends MissionFlightPathGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionFlightPathGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionFlightPathGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionFlightPathGroupByOutputType[P]>
            : GetScalarType<T[P], MissionFlightPathGroupByOutputType[P]>
        }
      >
    >


  export type MissionFlightPathSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missionId?: boolean
    waypoints?: boolean
    waypointCount?: boolean
    estimatedDistanceMeters?: boolean
    estimatedDurationSeconds?: boolean
    createdAt?: boolean
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missionFlightPath"]>

  export type MissionFlightPathSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missionId?: boolean
    waypoints?: boolean
    waypointCount?: boolean
    estimatedDistanceMeters?: boolean
    estimatedDurationSeconds?: boolean
    createdAt?: boolean
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missionFlightPath"]>

  export type MissionFlightPathSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missionId?: boolean
    waypoints?: boolean
    waypointCount?: boolean
    estimatedDistanceMeters?: boolean
    estimatedDurationSeconds?: boolean
    createdAt?: boolean
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missionFlightPath"]>

  export type MissionFlightPathSelectScalar = {
    id?: boolean
    missionId?: boolean
    waypoints?: boolean
    waypointCount?: boolean
    estimatedDistanceMeters?: boolean
    estimatedDurationSeconds?: boolean
    createdAt?: boolean
  }

  export type MissionFlightPathOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "missionId" | "waypoints" | "waypointCount" | "estimatedDistanceMeters" | "estimatedDurationSeconds" | "createdAt", ExtArgs["result"]["missionFlightPath"]>
  export type MissionFlightPathInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }
  export type MissionFlightPathIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }
  export type MissionFlightPathIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }

  export type $MissionFlightPathPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MissionFlightPath"
    objects: {
      mission: Prisma.$MissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      missionId: string
      waypoints: Prisma.JsonValue
      waypointCount: number
      estimatedDistanceMeters: number
      estimatedDurationSeconds: number
      createdAt: Date
    }, ExtArgs["result"]["missionFlightPath"]>
    composites: {}
  }

  type MissionFlightPathGetPayload<S extends boolean | null | undefined | MissionFlightPathDefaultArgs> = $Result.GetResult<Prisma.$MissionFlightPathPayload, S>

  type MissionFlightPathCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissionFlightPathFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissionFlightPathCountAggregateInputType | true
    }

  export interface MissionFlightPathDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MissionFlightPath'], meta: { name: 'MissionFlightPath' } }
    /**
     * Find zero or one MissionFlightPath that matches the filter.
     * @param {MissionFlightPathFindUniqueArgs} args - Arguments to find a MissionFlightPath
     * @example
     * // Get one MissionFlightPath
     * const missionFlightPath = await prisma.missionFlightPath.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionFlightPathFindUniqueArgs>(args: SelectSubset<T, MissionFlightPathFindUniqueArgs<ExtArgs>>): Prisma__MissionFlightPathClient<$Result.GetResult<Prisma.$MissionFlightPathPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MissionFlightPath that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionFlightPathFindUniqueOrThrowArgs} args - Arguments to find a MissionFlightPath
     * @example
     * // Get one MissionFlightPath
     * const missionFlightPath = await prisma.missionFlightPath.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionFlightPathFindUniqueOrThrowArgs>(args: SelectSubset<T, MissionFlightPathFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissionFlightPathClient<$Result.GetResult<Prisma.$MissionFlightPathPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MissionFlightPath that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFlightPathFindFirstArgs} args - Arguments to find a MissionFlightPath
     * @example
     * // Get one MissionFlightPath
     * const missionFlightPath = await prisma.missionFlightPath.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionFlightPathFindFirstArgs>(args?: SelectSubset<T, MissionFlightPathFindFirstArgs<ExtArgs>>): Prisma__MissionFlightPathClient<$Result.GetResult<Prisma.$MissionFlightPathPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MissionFlightPath that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFlightPathFindFirstOrThrowArgs} args - Arguments to find a MissionFlightPath
     * @example
     * // Get one MissionFlightPath
     * const missionFlightPath = await prisma.missionFlightPath.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionFlightPathFindFirstOrThrowArgs>(args?: SelectSubset<T, MissionFlightPathFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissionFlightPathClient<$Result.GetResult<Prisma.$MissionFlightPathPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MissionFlightPaths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFlightPathFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MissionFlightPaths
     * const missionFlightPaths = await prisma.missionFlightPath.findMany()
     * 
     * // Get first 10 MissionFlightPaths
     * const missionFlightPaths = await prisma.missionFlightPath.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missionFlightPathWithIdOnly = await prisma.missionFlightPath.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MissionFlightPathFindManyArgs>(args?: SelectSubset<T, MissionFlightPathFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionFlightPathPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MissionFlightPath.
     * @param {MissionFlightPathCreateArgs} args - Arguments to create a MissionFlightPath.
     * @example
     * // Create one MissionFlightPath
     * const MissionFlightPath = await prisma.missionFlightPath.create({
     *   data: {
     *     // ... data to create a MissionFlightPath
     *   }
     * })
     * 
     */
    create<T extends MissionFlightPathCreateArgs>(args: SelectSubset<T, MissionFlightPathCreateArgs<ExtArgs>>): Prisma__MissionFlightPathClient<$Result.GetResult<Prisma.$MissionFlightPathPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MissionFlightPaths.
     * @param {MissionFlightPathCreateManyArgs} args - Arguments to create many MissionFlightPaths.
     * @example
     * // Create many MissionFlightPaths
     * const missionFlightPath = await prisma.missionFlightPath.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissionFlightPathCreateManyArgs>(args?: SelectSubset<T, MissionFlightPathCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MissionFlightPaths and returns the data saved in the database.
     * @param {MissionFlightPathCreateManyAndReturnArgs} args - Arguments to create many MissionFlightPaths.
     * @example
     * // Create many MissionFlightPaths
     * const missionFlightPath = await prisma.missionFlightPath.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MissionFlightPaths and only return the `id`
     * const missionFlightPathWithIdOnly = await prisma.missionFlightPath.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MissionFlightPathCreateManyAndReturnArgs>(args?: SelectSubset<T, MissionFlightPathCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionFlightPathPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MissionFlightPath.
     * @param {MissionFlightPathDeleteArgs} args - Arguments to delete one MissionFlightPath.
     * @example
     * // Delete one MissionFlightPath
     * const MissionFlightPath = await prisma.missionFlightPath.delete({
     *   where: {
     *     // ... filter to delete one MissionFlightPath
     *   }
     * })
     * 
     */
    delete<T extends MissionFlightPathDeleteArgs>(args: SelectSubset<T, MissionFlightPathDeleteArgs<ExtArgs>>): Prisma__MissionFlightPathClient<$Result.GetResult<Prisma.$MissionFlightPathPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MissionFlightPath.
     * @param {MissionFlightPathUpdateArgs} args - Arguments to update one MissionFlightPath.
     * @example
     * // Update one MissionFlightPath
     * const missionFlightPath = await prisma.missionFlightPath.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissionFlightPathUpdateArgs>(args: SelectSubset<T, MissionFlightPathUpdateArgs<ExtArgs>>): Prisma__MissionFlightPathClient<$Result.GetResult<Prisma.$MissionFlightPathPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MissionFlightPaths.
     * @param {MissionFlightPathDeleteManyArgs} args - Arguments to filter MissionFlightPaths to delete.
     * @example
     * // Delete a few MissionFlightPaths
     * const { count } = await prisma.missionFlightPath.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissionFlightPathDeleteManyArgs>(args?: SelectSubset<T, MissionFlightPathDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MissionFlightPaths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFlightPathUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MissionFlightPaths
     * const missionFlightPath = await prisma.missionFlightPath.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissionFlightPathUpdateManyArgs>(args: SelectSubset<T, MissionFlightPathUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MissionFlightPaths and returns the data updated in the database.
     * @param {MissionFlightPathUpdateManyAndReturnArgs} args - Arguments to update many MissionFlightPaths.
     * @example
     * // Update many MissionFlightPaths
     * const missionFlightPath = await prisma.missionFlightPath.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MissionFlightPaths and only return the `id`
     * const missionFlightPathWithIdOnly = await prisma.missionFlightPath.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MissionFlightPathUpdateManyAndReturnArgs>(args: SelectSubset<T, MissionFlightPathUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionFlightPathPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MissionFlightPath.
     * @param {MissionFlightPathUpsertArgs} args - Arguments to update or create a MissionFlightPath.
     * @example
     * // Update or create a MissionFlightPath
     * const missionFlightPath = await prisma.missionFlightPath.upsert({
     *   create: {
     *     // ... data to create a MissionFlightPath
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MissionFlightPath we want to update
     *   }
     * })
     */
    upsert<T extends MissionFlightPathUpsertArgs>(args: SelectSubset<T, MissionFlightPathUpsertArgs<ExtArgs>>): Prisma__MissionFlightPathClient<$Result.GetResult<Prisma.$MissionFlightPathPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MissionFlightPaths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFlightPathCountArgs} args - Arguments to filter MissionFlightPaths to count.
     * @example
     * // Count the number of MissionFlightPaths
     * const count = await prisma.missionFlightPath.count({
     *   where: {
     *     // ... the filter for the MissionFlightPaths we want to count
     *   }
     * })
    **/
    count<T extends MissionFlightPathCountArgs>(
      args?: Subset<T, MissionFlightPathCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionFlightPathCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MissionFlightPath.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFlightPathAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MissionFlightPathAggregateArgs>(args: Subset<T, MissionFlightPathAggregateArgs>): Prisma.PrismaPromise<GetMissionFlightPathAggregateType<T>>

    /**
     * Group by MissionFlightPath.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFlightPathGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MissionFlightPathGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissionFlightPathGroupByArgs['orderBy'] }
        : { orderBy?: MissionFlightPathGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MissionFlightPathGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionFlightPathGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MissionFlightPath model
   */
  readonly fields: MissionFlightPathFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MissionFlightPath.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissionFlightPathClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mission<T extends MissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MissionDefaultArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MissionFlightPath model
   */
  interface MissionFlightPathFieldRefs {
    readonly id: FieldRef<"MissionFlightPath", 'String'>
    readonly missionId: FieldRef<"MissionFlightPath", 'String'>
    readonly waypoints: FieldRef<"MissionFlightPath", 'Json'>
    readonly waypointCount: FieldRef<"MissionFlightPath", 'Int'>
    readonly estimatedDistanceMeters: FieldRef<"MissionFlightPath", 'Float'>
    readonly estimatedDurationSeconds: FieldRef<"MissionFlightPath", 'Int'>
    readonly createdAt: FieldRef<"MissionFlightPath", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MissionFlightPath findUnique
   */
  export type MissionFlightPathFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionFlightPath
     */
    select?: MissionFlightPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionFlightPath
     */
    omit?: MissionFlightPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionFlightPathInclude<ExtArgs> | null
    /**
     * Filter, which MissionFlightPath to fetch.
     */
    where: MissionFlightPathWhereUniqueInput
  }

  /**
   * MissionFlightPath findUniqueOrThrow
   */
  export type MissionFlightPathFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionFlightPath
     */
    select?: MissionFlightPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionFlightPath
     */
    omit?: MissionFlightPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionFlightPathInclude<ExtArgs> | null
    /**
     * Filter, which MissionFlightPath to fetch.
     */
    where: MissionFlightPathWhereUniqueInput
  }

  /**
   * MissionFlightPath findFirst
   */
  export type MissionFlightPathFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionFlightPath
     */
    select?: MissionFlightPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionFlightPath
     */
    omit?: MissionFlightPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionFlightPathInclude<ExtArgs> | null
    /**
     * Filter, which MissionFlightPath to fetch.
     */
    where?: MissionFlightPathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionFlightPaths to fetch.
     */
    orderBy?: MissionFlightPathOrderByWithRelationInput | MissionFlightPathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissionFlightPaths.
     */
    cursor?: MissionFlightPathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionFlightPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionFlightPaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissionFlightPaths.
     */
    distinct?: MissionFlightPathScalarFieldEnum | MissionFlightPathScalarFieldEnum[]
  }

  /**
   * MissionFlightPath findFirstOrThrow
   */
  export type MissionFlightPathFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionFlightPath
     */
    select?: MissionFlightPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionFlightPath
     */
    omit?: MissionFlightPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionFlightPathInclude<ExtArgs> | null
    /**
     * Filter, which MissionFlightPath to fetch.
     */
    where?: MissionFlightPathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionFlightPaths to fetch.
     */
    orderBy?: MissionFlightPathOrderByWithRelationInput | MissionFlightPathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissionFlightPaths.
     */
    cursor?: MissionFlightPathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionFlightPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionFlightPaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissionFlightPaths.
     */
    distinct?: MissionFlightPathScalarFieldEnum | MissionFlightPathScalarFieldEnum[]
  }

  /**
   * MissionFlightPath findMany
   */
  export type MissionFlightPathFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionFlightPath
     */
    select?: MissionFlightPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionFlightPath
     */
    omit?: MissionFlightPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionFlightPathInclude<ExtArgs> | null
    /**
     * Filter, which MissionFlightPaths to fetch.
     */
    where?: MissionFlightPathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionFlightPaths to fetch.
     */
    orderBy?: MissionFlightPathOrderByWithRelationInput | MissionFlightPathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MissionFlightPaths.
     */
    cursor?: MissionFlightPathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionFlightPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionFlightPaths.
     */
    skip?: number
    distinct?: MissionFlightPathScalarFieldEnum | MissionFlightPathScalarFieldEnum[]
  }

  /**
   * MissionFlightPath create
   */
  export type MissionFlightPathCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionFlightPath
     */
    select?: MissionFlightPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionFlightPath
     */
    omit?: MissionFlightPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionFlightPathInclude<ExtArgs> | null
    /**
     * The data needed to create a MissionFlightPath.
     */
    data: XOR<MissionFlightPathCreateInput, MissionFlightPathUncheckedCreateInput>
  }

  /**
   * MissionFlightPath createMany
   */
  export type MissionFlightPathCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MissionFlightPaths.
     */
    data: MissionFlightPathCreateManyInput | MissionFlightPathCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MissionFlightPath createManyAndReturn
   */
  export type MissionFlightPathCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionFlightPath
     */
    select?: MissionFlightPathSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MissionFlightPath
     */
    omit?: MissionFlightPathOmit<ExtArgs> | null
    /**
     * The data used to create many MissionFlightPaths.
     */
    data: MissionFlightPathCreateManyInput | MissionFlightPathCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionFlightPathIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MissionFlightPath update
   */
  export type MissionFlightPathUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionFlightPath
     */
    select?: MissionFlightPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionFlightPath
     */
    omit?: MissionFlightPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionFlightPathInclude<ExtArgs> | null
    /**
     * The data needed to update a MissionFlightPath.
     */
    data: XOR<MissionFlightPathUpdateInput, MissionFlightPathUncheckedUpdateInput>
    /**
     * Choose, which MissionFlightPath to update.
     */
    where: MissionFlightPathWhereUniqueInput
  }

  /**
   * MissionFlightPath updateMany
   */
  export type MissionFlightPathUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MissionFlightPaths.
     */
    data: XOR<MissionFlightPathUpdateManyMutationInput, MissionFlightPathUncheckedUpdateManyInput>
    /**
     * Filter which MissionFlightPaths to update
     */
    where?: MissionFlightPathWhereInput
    /**
     * Limit how many MissionFlightPaths to update.
     */
    limit?: number
  }

  /**
   * MissionFlightPath updateManyAndReturn
   */
  export type MissionFlightPathUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionFlightPath
     */
    select?: MissionFlightPathSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MissionFlightPath
     */
    omit?: MissionFlightPathOmit<ExtArgs> | null
    /**
     * The data used to update MissionFlightPaths.
     */
    data: XOR<MissionFlightPathUpdateManyMutationInput, MissionFlightPathUncheckedUpdateManyInput>
    /**
     * Filter which MissionFlightPaths to update
     */
    where?: MissionFlightPathWhereInput
    /**
     * Limit how many MissionFlightPaths to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionFlightPathIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MissionFlightPath upsert
   */
  export type MissionFlightPathUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionFlightPath
     */
    select?: MissionFlightPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionFlightPath
     */
    omit?: MissionFlightPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionFlightPathInclude<ExtArgs> | null
    /**
     * The filter to search for the MissionFlightPath to update in case it exists.
     */
    where: MissionFlightPathWhereUniqueInput
    /**
     * In case the MissionFlightPath found by the `where` argument doesn't exist, create a new MissionFlightPath with this data.
     */
    create: XOR<MissionFlightPathCreateInput, MissionFlightPathUncheckedCreateInput>
    /**
     * In case the MissionFlightPath was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissionFlightPathUpdateInput, MissionFlightPathUncheckedUpdateInput>
  }

  /**
   * MissionFlightPath delete
   */
  export type MissionFlightPathDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionFlightPath
     */
    select?: MissionFlightPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionFlightPath
     */
    omit?: MissionFlightPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionFlightPathInclude<ExtArgs> | null
    /**
     * Filter which MissionFlightPath to delete.
     */
    where: MissionFlightPathWhereUniqueInput
  }

  /**
   * MissionFlightPath deleteMany
   */
  export type MissionFlightPathDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissionFlightPaths to delete
     */
    where?: MissionFlightPathWhereInput
    /**
     * Limit how many MissionFlightPaths to delete.
     */
    limit?: number
  }

  /**
   * MissionFlightPath without action
   */
  export type MissionFlightPathDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionFlightPath
     */
    select?: MissionFlightPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionFlightPath
     */
    omit?: MissionFlightPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionFlightPathInclude<ExtArgs> | null
  }


  /**
   * Model MissionTelemetry
   */

  export type AggregateMissionTelemetry = {
    _count: MissionTelemetryCountAggregateOutputType | null
    _avg: MissionTelemetryAvgAggregateOutputType | null
    _sum: MissionTelemetrySumAggregateOutputType | null
    _min: MissionTelemetryMinAggregateOutputType | null
    _max: MissionTelemetryMaxAggregateOutputType | null
  }

  export type MissionTelemetryAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    altitude: number | null
    heading: number | null
    speed: number | null
    progress: number | null
    etaSeconds: number | null
    waypointIndex: number | null
    distanceTraveled: number | null
    distanceRemaining: number | null
    batteryLevel: number | null
    batteryVoltage: number | null
    signalStrength: number | null
    motorTemp: number | null
    airQualityIndex: number | null
    temperature: number | null
    humidity: number | null
    particulateMatter: number | null
  }

  export type MissionTelemetrySumAggregateOutputType = {
    id: bigint | null
    latitude: number | null
    longitude: number | null
    altitude: number | null
    heading: number | null
    speed: number | null
    progress: number | null
    etaSeconds: number | null
    waypointIndex: number | null
    distanceTraveled: number | null
    distanceRemaining: number | null
    batteryLevel: number | null
    batteryVoltage: number | null
    signalStrength: number | null
    motorTemp: number | null
    airQualityIndex: number | null
    temperature: number | null
    humidity: number | null
    particulateMatter: number | null
  }

  export type MissionTelemetryMinAggregateOutputType = {
    id: bigint | null
    missionId: string | null
    latitude: number | null
    longitude: number | null
    altitude: number | null
    heading: number | null
    speed: number | null
    phase: string | null
    progress: number | null
    etaSeconds: number | null
    waypointIndex: number | null
    distanceTraveled: number | null
    distanceRemaining: number | null
    batteryLevel: number | null
    batteryVoltage: number | null
    signalStrength: number | null
    motorTemp: number | null
    airQualityIndex: number | null
    temperature: number | null
    humidity: number | null
    particulateMatter: number | null
    recordedAt: Date | null
  }

  export type MissionTelemetryMaxAggregateOutputType = {
    id: bigint | null
    missionId: string | null
    latitude: number | null
    longitude: number | null
    altitude: number | null
    heading: number | null
    speed: number | null
    phase: string | null
    progress: number | null
    etaSeconds: number | null
    waypointIndex: number | null
    distanceTraveled: number | null
    distanceRemaining: number | null
    batteryLevel: number | null
    batteryVoltage: number | null
    signalStrength: number | null
    motorTemp: number | null
    airQualityIndex: number | null
    temperature: number | null
    humidity: number | null
    particulateMatter: number | null
    recordedAt: Date | null
  }

  export type MissionTelemetryCountAggregateOutputType = {
    id: number
    missionId: number
    latitude: number
    longitude: number
    altitude: number
    heading: number
    speed: number
    phase: number
    progress: number
    etaSeconds: number
    waypointIndex: number
    distanceTraveled: number
    distanceRemaining: number
    batteryLevel: number
    batteryVoltage: number
    signalStrength: number
    motorTemp: number
    airQualityIndex: number
    temperature: number
    humidity: number
    particulateMatter: number
    recordedAt: number
    _all: number
  }


  export type MissionTelemetryAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    altitude?: true
    heading?: true
    speed?: true
    progress?: true
    etaSeconds?: true
    waypointIndex?: true
    distanceTraveled?: true
    distanceRemaining?: true
    batteryLevel?: true
    batteryVoltage?: true
    signalStrength?: true
    motorTemp?: true
    airQualityIndex?: true
    temperature?: true
    humidity?: true
    particulateMatter?: true
  }

  export type MissionTelemetrySumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    altitude?: true
    heading?: true
    speed?: true
    progress?: true
    etaSeconds?: true
    waypointIndex?: true
    distanceTraveled?: true
    distanceRemaining?: true
    batteryLevel?: true
    batteryVoltage?: true
    signalStrength?: true
    motorTemp?: true
    airQualityIndex?: true
    temperature?: true
    humidity?: true
    particulateMatter?: true
  }

  export type MissionTelemetryMinAggregateInputType = {
    id?: true
    missionId?: true
    latitude?: true
    longitude?: true
    altitude?: true
    heading?: true
    speed?: true
    phase?: true
    progress?: true
    etaSeconds?: true
    waypointIndex?: true
    distanceTraveled?: true
    distanceRemaining?: true
    batteryLevel?: true
    batteryVoltage?: true
    signalStrength?: true
    motorTemp?: true
    airQualityIndex?: true
    temperature?: true
    humidity?: true
    particulateMatter?: true
    recordedAt?: true
  }

  export type MissionTelemetryMaxAggregateInputType = {
    id?: true
    missionId?: true
    latitude?: true
    longitude?: true
    altitude?: true
    heading?: true
    speed?: true
    phase?: true
    progress?: true
    etaSeconds?: true
    waypointIndex?: true
    distanceTraveled?: true
    distanceRemaining?: true
    batteryLevel?: true
    batteryVoltage?: true
    signalStrength?: true
    motorTemp?: true
    airQualityIndex?: true
    temperature?: true
    humidity?: true
    particulateMatter?: true
    recordedAt?: true
  }

  export type MissionTelemetryCountAggregateInputType = {
    id?: true
    missionId?: true
    latitude?: true
    longitude?: true
    altitude?: true
    heading?: true
    speed?: true
    phase?: true
    progress?: true
    etaSeconds?: true
    waypointIndex?: true
    distanceTraveled?: true
    distanceRemaining?: true
    batteryLevel?: true
    batteryVoltage?: true
    signalStrength?: true
    motorTemp?: true
    airQualityIndex?: true
    temperature?: true
    humidity?: true
    particulateMatter?: true
    recordedAt?: true
    _all?: true
  }

  export type MissionTelemetryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissionTelemetry to aggregate.
     */
    where?: MissionTelemetryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionTelemetries to fetch.
     */
    orderBy?: MissionTelemetryOrderByWithRelationInput | MissionTelemetryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissionTelemetryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionTelemetries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionTelemetries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MissionTelemetries
    **/
    _count?: true | MissionTelemetryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MissionTelemetryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MissionTelemetrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionTelemetryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionTelemetryMaxAggregateInputType
  }

  export type GetMissionTelemetryAggregateType<T extends MissionTelemetryAggregateArgs> = {
        [P in keyof T & keyof AggregateMissionTelemetry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMissionTelemetry[P]>
      : GetScalarType<T[P], AggregateMissionTelemetry[P]>
  }




  export type MissionTelemetryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionTelemetryWhereInput
    orderBy?: MissionTelemetryOrderByWithAggregationInput | MissionTelemetryOrderByWithAggregationInput[]
    by: MissionTelemetryScalarFieldEnum[] | MissionTelemetryScalarFieldEnum
    having?: MissionTelemetryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionTelemetryCountAggregateInputType | true
    _avg?: MissionTelemetryAvgAggregateInputType
    _sum?: MissionTelemetrySumAggregateInputType
    _min?: MissionTelemetryMinAggregateInputType
    _max?: MissionTelemetryMaxAggregateInputType
  }

  export type MissionTelemetryGroupByOutputType = {
    id: bigint
    missionId: string
    latitude: number
    longitude: number
    altitude: number | null
    heading: number | null
    speed: number | null
    phase: string | null
    progress: number
    etaSeconds: number | null
    waypointIndex: number | null
    distanceTraveled: number | null
    distanceRemaining: number | null
    batteryLevel: number | null
    batteryVoltage: number | null
    signalStrength: number | null
    motorTemp: number | null
    airQualityIndex: number | null
    temperature: number | null
    humidity: number | null
    particulateMatter: number | null
    recordedAt: Date
    _count: MissionTelemetryCountAggregateOutputType | null
    _avg: MissionTelemetryAvgAggregateOutputType | null
    _sum: MissionTelemetrySumAggregateOutputType | null
    _min: MissionTelemetryMinAggregateOutputType | null
    _max: MissionTelemetryMaxAggregateOutputType | null
  }

  type GetMissionTelemetryGroupByPayload<T extends MissionTelemetryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionTelemetryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionTelemetryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionTelemetryGroupByOutputType[P]>
            : GetScalarType<T[P], MissionTelemetryGroupByOutputType[P]>
        }
      >
    >


  export type MissionTelemetrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missionId?: boolean
    latitude?: boolean
    longitude?: boolean
    altitude?: boolean
    heading?: boolean
    speed?: boolean
    phase?: boolean
    progress?: boolean
    etaSeconds?: boolean
    waypointIndex?: boolean
    distanceTraveled?: boolean
    distanceRemaining?: boolean
    batteryLevel?: boolean
    batteryVoltage?: boolean
    signalStrength?: boolean
    motorTemp?: boolean
    airQualityIndex?: boolean
    temperature?: boolean
    humidity?: boolean
    particulateMatter?: boolean
    recordedAt?: boolean
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missionTelemetry"]>

  export type MissionTelemetrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missionId?: boolean
    latitude?: boolean
    longitude?: boolean
    altitude?: boolean
    heading?: boolean
    speed?: boolean
    phase?: boolean
    progress?: boolean
    etaSeconds?: boolean
    waypointIndex?: boolean
    distanceTraveled?: boolean
    distanceRemaining?: boolean
    batteryLevel?: boolean
    batteryVoltage?: boolean
    signalStrength?: boolean
    motorTemp?: boolean
    airQualityIndex?: boolean
    temperature?: boolean
    humidity?: boolean
    particulateMatter?: boolean
    recordedAt?: boolean
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missionTelemetry"]>

  export type MissionTelemetrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missionId?: boolean
    latitude?: boolean
    longitude?: boolean
    altitude?: boolean
    heading?: boolean
    speed?: boolean
    phase?: boolean
    progress?: boolean
    etaSeconds?: boolean
    waypointIndex?: boolean
    distanceTraveled?: boolean
    distanceRemaining?: boolean
    batteryLevel?: boolean
    batteryVoltage?: boolean
    signalStrength?: boolean
    motorTemp?: boolean
    airQualityIndex?: boolean
    temperature?: boolean
    humidity?: boolean
    particulateMatter?: boolean
    recordedAt?: boolean
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missionTelemetry"]>

  export type MissionTelemetrySelectScalar = {
    id?: boolean
    missionId?: boolean
    latitude?: boolean
    longitude?: boolean
    altitude?: boolean
    heading?: boolean
    speed?: boolean
    phase?: boolean
    progress?: boolean
    etaSeconds?: boolean
    waypointIndex?: boolean
    distanceTraveled?: boolean
    distanceRemaining?: boolean
    batteryLevel?: boolean
    batteryVoltage?: boolean
    signalStrength?: boolean
    motorTemp?: boolean
    airQualityIndex?: boolean
    temperature?: boolean
    humidity?: boolean
    particulateMatter?: boolean
    recordedAt?: boolean
  }

  export type MissionTelemetryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "missionId" | "latitude" | "longitude" | "altitude" | "heading" | "speed" | "phase" | "progress" | "etaSeconds" | "waypointIndex" | "distanceTraveled" | "distanceRemaining" | "batteryLevel" | "batteryVoltage" | "signalStrength" | "motorTemp" | "airQualityIndex" | "temperature" | "humidity" | "particulateMatter" | "recordedAt", ExtArgs["result"]["missionTelemetry"]>
  export type MissionTelemetryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }
  export type MissionTelemetryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }
  export type MissionTelemetryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }

  export type $MissionTelemetryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MissionTelemetry"
    objects: {
      mission: Prisma.$MissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      missionId: string
      latitude: number
      longitude: number
      altitude: number | null
      heading: number | null
      speed: number | null
      phase: string | null
      progress: number
      etaSeconds: number | null
      waypointIndex: number | null
      distanceTraveled: number | null
      distanceRemaining: number | null
      batteryLevel: number | null
      batteryVoltage: number | null
      signalStrength: number | null
      motorTemp: number | null
      airQualityIndex: number | null
      temperature: number | null
      humidity: number | null
      particulateMatter: number | null
      recordedAt: Date
    }, ExtArgs["result"]["missionTelemetry"]>
    composites: {}
  }

  type MissionTelemetryGetPayload<S extends boolean | null | undefined | MissionTelemetryDefaultArgs> = $Result.GetResult<Prisma.$MissionTelemetryPayload, S>

  type MissionTelemetryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissionTelemetryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissionTelemetryCountAggregateInputType | true
    }

  export interface MissionTelemetryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MissionTelemetry'], meta: { name: 'MissionTelemetry' } }
    /**
     * Find zero or one MissionTelemetry that matches the filter.
     * @param {MissionTelemetryFindUniqueArgs} args - Arguments to find a MissionTelemetry
     * @example
     * // Get one MissionTelemetry
     * const missionTelemetry = await prisma.missionTelemetry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionTelemetryFindUniqueArgs>(args: SelectSubset<T, MissionTelemetryFindUniqueArgs<ExtArgs>>): Prisma__MissionTelemetryClient<$Result.GetResult<Prisma.$MissionTelemetryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MissionTelemetry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionTelemetryFindUniqueOrThrowArgs} args - Arguments to find a MissionTelemetry
     * @example
     * // Get one MissionTelemetry
     * const missionTelemetry = await prisma.missionTelemetry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionTelemetryFindUniqueOrThrowArgs>(args: SelectSubset<T, MissionTelemetryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissionTelemetryClient<$Result.GetResult<Prisma.$MissionTelemetryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MissionTelemetry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionTelemetryFindFirstArgs} args - Arguments to find a MissionTelemetry
     * @example
     * // Get one MissionTelemetry
     * const missionTelemetry = await prisma.missionTelemetry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionTelemetryFindFirstArgs>(args?: SelectSubset<T, MissionTelemetryFindFirstArgs<ExtArgs>>): Prisma__MissionTelemetryClient<$Result.GetResult<Prisma.$MissionTelemetryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MissionTelemetry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionTelemetryFindFirstOrThrowArgs} args - Arguments to find a MissionTelemetry
     * @example
     * // Get one MissionTelemetry
     * const missionTelemetry = await prisma.missionTelemetry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionTelemetryFindFirstOrThrowArgs>(args?: SelectSubset<T, MissionTelemetryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissionTelemetryClient<$Result.GetResult<Prisma.$MissionTelemetryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MissionTelemetries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionTelemetryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MissionTelemetries
     * const missionTelemetries = await prisma.missionTelemetry.findMany()
     * 
     * // Get first 10 MissionTelemetries
     * const missionTelemetries = await prisma.missionTelemetry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missionTelemetryWithIdOnly = await prisma.missionTelemetry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MissionTelemetryFindManyArgs>(args?: SelectSubset<T, MissionTelemetryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionTelemetryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MissionTelemetry.
     * @param {MissionTelemetryCreateArgs} args - Arguments to create a MissionTelemetry.
     * @example
     * // Create one MissionTelemetry
     * const MissionTelemetry = await prisma.missionTelemetry.create({
     *   data: {
     *     // ... data to create a MissionTelemetry
     *   }
     * })
     * 
     */
    create<T extends MissionTelemetryCreateArgs>(args: SelectSubset<T, MissionTelemetryCreateArgs<ExtArgs>>): Prisma__MissionTelemetryClient<$Result.GetResult<Prisma.$MissionTelemetryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MissionTelemetries.
     * @param {MissionTelemetryCreateManyArgs} args - Arguments to create many MissionTelemetries.
     * @example
     * // Create many MissionTelemetries
     * const missionTelemetry = await prisma.missionTelemetry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissionTelemetryCreateManyArgs>(args?: SelectSubset<T, MissionTelemetryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MissionTelemetries and returns the data saved in the database.
     * @param {MissionTelemetryCreateManyAndReturnArgs} args - Arguments to create many MissionTelemetries.
     * @example
     * // Create many MissionTelemetries
     * const missionTelemetry = await prisma.missionTelemetry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MissionTelemetries and only return the `id`
     * const missionTelemetryWithIdOnly = await prisma.missionTelemetry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MissionTelemetryCreateManyAndReturnArgs>(args?: SelectSubset<T, MissionTelemetryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionTelemetryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MissionTelemetry.
     * @param {MissionTelemetryDeleteArgs} args - Arguments to delete one MissionTelemetry.
     * @example
     * // Delete one MissionTelemetry
     * const MissionTelemetry = await prisma.missionTelemetry.delete({
     *   where: {
     *     // ... filter to delete one MissionTelemetry
     *   }
     * })
     * 
     */
    delete<T extends MissionTelemetryDeleteArgs>(args: SelectSubset<T, MissionTelemetryDeleteArgs<ExtArgs>>): Prisma__MissionTelemetryClient<$Result.GetResult<Prisma.$MissionTelemetryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MissionTelemetry.
     * @param {MissionTelemetryUpdateArgs} args - Arguments to update one MissionTelemetry.
     * @example
     * // Update one MissionTelemetry
     * const missionTelemetry = await prisma.missionTelemetry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissionTelemetryUpdateArgs>(args: SelectSubset<T, MissionTelemetryUpdateArgs<ExtArgs>>): Prisma__MissionTelemetryClient<$Result.GetResult<Prisma.$MissionTelemetryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MissionTelemetries.
     * @param {MissionTelemetryDeleteManyArgs} args - Arguments to filter MissionTelemetries to delete.
     * @example
     * // Delete a few MissionTelemetries
     * const { count } = await prisma.missionTelemetry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissionTelemetryDeleteManyArgs>(args?: SelectSubset<T, MissionTelemetryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MissionTelemetries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionTelemetryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MissionTelemetries
     * const missionTelemetry = await prisma.missionTelemetry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissionTelemetryUpdateManyArgs>(args: SelectSubset<T, MissionTelemetryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MissionTelemetries and returns the data updated in the database.
     * @param {MissionTelemetryUpdateManyAndReturnArgs} args - Arguments to update many MissionTelemetries.
     * @example
     * // Update many MissionTelemetries
     * const missionTelemetry = await prisma.missionTelemetry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MissionTelemetries and only return the `id`
     * const missionTelemetryWithIdOnly = await prisma.missionTelemetry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MissionTelemetryUpdateManyAndReturnArgs>(args: SelectSubset<T, MissionTelemetryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionTelemetryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MissionTelemetry.
     * @param {MissionTelemetryUpsertArgs} args - Arguments to update or create a MissionTelemetry.
     * @example
     * // Update or create a MissionTelemetry
     * const missionTelemetry = await prisma.missionTelemetry.upsert({
     *   create: {
     *     // ... data to create a MissionTelemetry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MissionTelemetry we want to update
     *   }
     * })
     */
    upsert<T extends MissionTelemetryUpsertArgs>(args: SelectSubset<T, MissionTelemetryUpsertArgs<ExtArgs>>): Prisma__MissionTelemetryClient<$Result.GetResult<Prisma.$MissionTelemetryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MissionTelemetries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionTelemetryCountArgs} args - Arguments to filter MissionTelemetries to count.
     * @example
     * // Count the number of MissionTelemetries
     * const count = await prisma.missionTelemetry.count({
     *   where: {
     *     // ... the filter for the MissionTelemetries we want to count
     *   }
     * })
    **/
    count<T extends MissionTelemetryCountArgs>(
      args?: Subset<T, MissionTelemetryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionTelemetryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MissionTelemetry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionTelemetryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MissionTelemetryAggregateArgs>(args: Subset<T, MissionTelemetryAggregateArgs>): Prisma.PrismaPromise<GetMissionTelemetryAggregateType<T>>

    /**
     * Group by MissionTelemetry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionTelemetryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MissionTelemetryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissionTelemetryGroupByArgs['orderBy'] }
        : { orderBy?: MissionTelemetryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MissionTelemetryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionTelemetryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MissionTelemetry model
   */
  readonly fields: MissionTelemetryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MissionTelemetry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissionTelemetryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mission<T extends MissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MissionDefaultArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MissionTelemetry model
   */
  interface MissionTelemetryFieldRefs {
    readonly id: FieldRef<"MissionTelemetry", 'BigInt'>
    readonly missionId: FieldRef<"MissionTelemetry", 'String'>
    readonly latitude: FieldRef<"MissionTelemetry", 'Float'>
    readonly longitude: FieldRef<"MissionTelemetry", 'Float'>
    readonly altitude: FieldRef<"MissionTelemetry", 'Float'>
    readonly heading: FieldRef<"MissionTelemetry", 'Float'>
    readonly speed: FieldRef<"MissionTelemetry", 'Float'>
    readonly phase: FieldRef<"MissionTelemetry", 'String'>
    readonly progress: FieldRef<"MissionTelemetry", 'Int'>
    readonly etaSeconds: FieldRef<"MissionTelemetry", 'Int'>
    readonly waypointIndex: FieldRef<"MissionTelemetry", 'Int'>
    readonly distanceTraveled: FieldRef<"MissionTelemetry", 'Float'>
    readonly distanceRemaining: FieldRef<"MissionTelemetry", 'Float'>
    readonly batteryLevel: FieldRef<"MissionTelemetry", 'Int'>
    readonly batteryVoltage: FieldRef<"MissionTelemetry", 'Float'>
    readonly signalStrength: FieldRef<"MissionTelemetry", 'Int'>
    readonly motorTemp: FieldRef<"MissionTelemetry", 'Float'>
    readonly airQualityIndex: FieldRef<"MissionTelemetry", 'Int'>
    readonly temperature: FieldRef<"MissionTelemetry", 'Float'>
    readonly humidity: FieldRef<"MissionTelemetry", 'Float'>
    readonly particulateMatter: FieldRef<"MissionTelemetry", 'Float'>
    readonly recordedAt: FieldRef<"MissionTelemetry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MissionTelemetry findUnique
   */
  export type MissionTelemetryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionTelemetry
     */
    select?: MissionTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionTelemetry
     */
    omit?: MissionTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionTelemetryInclude<ExtArgs> | null
    /**
     * Filter, which MissionTelemetry to fetch.
     */
    where: MissionTelemetryWhereUniqueInput
  }

  /**
   * MissionTelemetry findUniqueOrThrow
   */
  export type MissionTelemetryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionTelemetry
     */
    select?: MissionTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionTelemetry
     */
    omit?: MissionTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionTelemetryInclude<ExtArgs> | null
    /**
     * Filter, which MissionTelemetry to fetch.
     */
    where: MissionTelemetryWhereUniqueInput
  }

  /**
   * MissionTelemetry findFirst
   */
  export type MissionTelemetryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionTelemetry
     */
    select?: MissionTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionTelemetry
     */
    omit?: MissionTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionTelemetryInclude<ExtArgs> | null
    /**
     * Filter, which MissionTelemetry to fetch.
     */
    where?: MissionTelemetryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionTelemetries to fetch.
     */
    orderBy?: MissionTelemetryOrderByWithRelationInput | MissionTelemetryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissionTelemetries.
     */
    cursor?: MissionTelemetryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionTelemetries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionTelemetries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissionTelemetries.
     */
    distinct?: MissionTelemetryScalarFieldEnum | MissionTelemetryScalarFieldEnum[]
  }

  /**
   * MissionTelemetry findFirstOrThrow
   */
  export type MissionTelemetryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionTelemetry
     */
    select?: MissionTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionTelemetry
     */
    omit?: MissionTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionTelemetryInclude<ExtArgs> | null
    /**
     * Filter, which MissionTelemetry to fetch.
     */
    where?: MissionTelemetryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionTelemetries to fetch.
     */
    orderBy?: MissionTelemetryOrderByWithRelationInput | MissionTelemetryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissionTelemetries.
     */
    cursor?: MissionTelemetryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionTelemetries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionTelemetries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissionTelemetries.
     */
    distinct?: MissionTelemetryScalarFieldEnum | MissionTelemetryScalarFieldEnum[]
  }

  /**
   * MissionTelemetry findMany
   */
  export type MissionTelemetryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionTelemetry
     */
    select?: MissionTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionTelemetry
     */
    omit?: MissionTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionTelemetryInclude<ExtArgs> | null
    /**
     * Filter, which MissionTelemetries to fetch.
     */
    where?: MissionTelemetryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionTelemetries to fetch.
     */
    orderBy?: MissionTelemetryOrderByWithRelationInput | MissionTelemetryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MissionTelemetries.
     */
    cursor?: MissionTelemetryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionTelemetries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionTelemetries.
     */
    skip?: number
    distinct?: MissionTelemetryScalarFieldEnum | MissionTelemetryScalarFieldEnum[]
  }

  /**
   * MissionTelemetry create
   */
  export type MissionTelemetryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionTelemetry
     */
    select?: MissionTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionTelemetry
     */
    omit?: MissionTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionTelemetryInclude<ExtArgs> | null
    /**
     * The data needed to create a MissionTelemetry.
     */
    data: XOR<MissionTelemetryCreateInput, MissionTelemetryUncheckedCreateInput>
  }

  /**
   * MissionTelemetry createMany
   */
  export type MissionTelemetryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MissionTelemetries.
     */
    data: MissionTelemetryCreateManyInput | MissionTelemetryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MissionTelemetry createManyAndReturn
   */
  export type MissionTelemetryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionTelemetry
     */
    select?: MissionTelemetrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MissionTelemetry
     */
    omit?: MissionTelemetryOmit<ExtArgs> | null
    /**
     * The data used to create many MissionTelemetries.
     */
    data: MissionTelemetryCreateManyInput | MissionTelemetryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionTelemetryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MissionTelemetry update
   */
  export type MissionTelemetryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionTelemetry
     */
    select?: MissionTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionTelemetry
     */
    omit?: MissionTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionTelemetryInclude<ExtArgs> | null
    /**
     * The data needed to update a MissionTelemetry.
     */
    data: XOR<MissionTelemetryUpdateInput, MissionTelemetryUncheckedUpdateInput>
    /**
     * Choose, which MissionTelemetry to update.
     */
    where: MissionTelemetryWhereUniqueInput
  }

  /**
   * MissionTelemetry updateMany
   */
  export type MissionTelemetryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MissionTelemetries.
     */
    data: XOR<MissionTelemetryUpdateManyMutationInput, MissionTelemetryUncheckedUpdateManyInput>
    /**
     * Filter which MissionTelemetries to update
     */
    where?: MissionTelemetryWhereInput
    /**
     * Limit how many MissionTelemetries to update.
     */
    limit?: number
  }

  /**
   * MissionTelemetry updateManyAndReturn
   */
  export type MissionTelemetryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionTelemetry
     */
    select?: MissionTelemetrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MissionTelemetry
     */
    omit?: MissionTelemetryOmit<ExtArgs> | null
    /**
     * The data used to update MissionTelemetries.
     */
    data: XOR<MissionTelemetryUpdateManyMutationInput, MissionTelemetryUncheckedUpdateManyInput>
    /**
     * Filter which MissionTelemetries to update
     */
    where?: MissionTelemetryWhereInput
    /**
     * Limit how many MissionTelemetries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionTelemetryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MissionTelemetry upsert
   */
  export type MissionTelemetryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionTelemetry
     */
    select?: MissionTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionTelemetry
     */
    omit?: MissionTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionTelemetryInclude<ExtArgs> | null
    /**
     * The filter to search for the MissionTelemetry to update in case it exists.
     */
    where: MissionTelemetryWhereUniqueInput
    /**
     * In case the MissionTelemetry found by the `where` argument doesn't exist, create a new MissionTelemetry with this data.
     */
    create: XOR<MissionTelemetryCreateInput, MissionTelemetryUncheckedCreateInput>
    /**
     * In case the MissionTelemetry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissionTelemetryUpdateInput, MissionTelemetryUncheckedUpdateInput>
  }

  /**
   * MissionTelemetry delete
   */
  export type MissionTelemetryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionTelemetry
     */
    select?: MissionTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionTelemetry
     */
    omit?: MissionTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionTelemetryInclude<ExtArgs> | null
    /**
     * Filter which MissionTelemetry to delete.
     */
    where: MissionTelemetryWhereUniqueInput
  }

  /**
   * MissionTelemetry deleteMany
   */
  export type MissionTelemetryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissionTelemetries to delete
     */
    where?: MissionTelemetryWhereInput
    /**
     * Limit how many MissionTelemetries to delete.
     */
    limit?: number
  }

  /**
   * MissionTelemetry without action
   */
  export type MissionTelemetryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionTelemetry
     */
    select?: MissionTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionTelemetry
     */
    omit?: MissionTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionTelemetryInclude<ExtArgs> | null
  }


  /**
   * Model MissionEvent
   */

  export type AggregateMissionEvent = {
    _count: MissionEventCountAggregateOutputType | null
    _min: MissionEventMinAggregateOutputType | null
    _max: MissionEventMaxAggregateOutputType | null
  }

  export type MissionEventMinAggregateOutputType = {
    id: string | null
    missionId: string | null
    eventType: string | null
    createdAt: Date | null
  }

  export type MissionEventMaxAggregateOutputType = {
    id: string | null
    missionId: string | null
    eventType: string | null
    createdAt: Date | null
  }

  export type MissionEventCountAggregateOutputType = {
    id: number
    missionId: number
    eventType: number
    payload: number
    createdAt: number
    _all: number
  }


  export type MissionEventMinAggregateInputType = {
    id?: true
    missionId?: true
    eventType?: true
    createdAt?: true
  }

  export type MissionEventMaxAggregateInputType = {
    id?: true
    missionId?: true
    eventType?: true
    createdAt?: true
  }

  export type MissionEventCountAggregateInputType = {
    id?: true
    missionId?: true
    eventType?: true
    payload?: true
    createdAt?: true
    _all?: true
  }

  export type MissionEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissionEvent to aggregate.
     */
    where?: MissionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionEvents to fetch.
     */
    orderBy?: MissionEventOrderByWithRelationInput | MissionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MissionEvents
    **/
    _count?: true | MissionEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionEventMaxAggregateInputType
  }

  export type GetMissionEventAggregateType<T extends MissionEventAggregateArgs> = {
        [P in keyof T & keyof AggregateMissionEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMissionEvent[P]>
      : GetScalarType<T[P], AggregateMissionEvent[P]>
  }




  export type MissionEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionEventWhereInput
    orderBy?: MissionEventOrderByWithAggregationInput | MissionEventOrderByWithAggregationInput[]
    by: MissionEventScalarFieldEnum[] | MissionEventScalarFieldEnum
    having?: MissionEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionEventCountAggregateInputType | true
    _min?: MissionEventMinAggregateInputType
    _max?: MissionEventMaxAggregateInputType
  }

  export type MissionEventGroupByOutputType = {
    id: string
    missionId: string
    eventType: string
    payload: JsonValue | null
    createdAt: Date
    _count: MissionEventCountAggregateOutputType | null
    _min: MissionEventMinAggregateOutputType | null
    _max: MissionEventMaxAggregateOutputType | null
  }

  type GetMissionEventGroupByPayload<T extends MissionEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionEventGroupByOutputType[P]>
            : GetScalarType<T[P], MissionEventGroupByOutputType[P]>
        }
      >
    >


  export type MissionEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missionId?: boolean
    eventType?: boolean
    payload?: boolean
    createdAt?: boolean
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missionEvent"]>

  export type MissionEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missionId?: boolean
    eventType?: boolean
    payload?: boolean
    createdAt?: boolean
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missionEvent"]>

  export type MissionEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missionId?: boolean
    eventType?: boolean
    payload?: boolean
    createdAt?: boolean
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missionEvent"]>

  export type MissionEventSelectScalar = {
    id?: boolean
    missionId?: boolean
    eventType?: boolean
    payload?: boolean
    createdAt?: boolean
  }

  export type MissionEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "missionId" | "eventType" | "payload" | "createdAt", ExtArgs["result"]["missionEvent"]>
  export type MissionEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }
  export type MissionEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }
  export type MissionEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }

  export type $MissionEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MissionEvent"
    objects: {
      mission: Prisma.$MissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      missionId: string
      eventType: string
      payload: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["missionEvent"]>
    composites: {}
  }

  type MissionEventGetPayload<S extends boolean | null | undefined | MissionEventDefaultArgs> = $Result.GetResult<Prisma.$MissionEventPayload, S>

  type MissionEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissionEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissionEventCountAggregateInputType | true
    }

  export interface MissionEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MissionEvent'], meta: { name: 'MissionEvent' } }
    /**
     * Find zero or one MissionEvent that matches the filter.
     * @param {MissionEventFindUniqueArgs} args - Arguments to find a MissionEvent
     * @example
     * // Get one MissionEvent
     * const missionEvent = await prisma.missionEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionEventFindUniqueArgs>(args: SelectSubset<T, MissionEventFindUniqueArgs<ExtArgs>>): Prisma__MissionEventClient<$Result.GetResult<Prisma.$MissionEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MissionEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionEventFindUniqueOrThrowArgs} args - Arguments to find a MissionEvent
     * @example
     * // Get one MissionEvent
     * const missionEvent = await prisma.missionEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionEventFindUniqueOrThrowArgs>(args: SelectSubset<T, MissionEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissionEventClient<$Result.GetResult<Prisma.$MissionEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MissionEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionEventFindFirstArgs} args - Arguments to find a MissionEvent
     * @example
     * // Get one MissionEvent
     * const missionEvent = await prisma.missionEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionEventFindFirstArgs>(args?: SelectSubset<T, MissionEventFindFirstArgs<ExtArgs>>): Prisma__MissionEventClient<$Result.GetResult<Prisma.$MissionEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MissionEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionEventFindFirstOrThrowArgs} args - Arguments to find a MissionEvent
     * @example
     * // Get one MissionEvent
     * const missionEvent = await prisma.missionEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionEventFindFirstOrThrowArgs>(args?: SelectSubset<T, MissionEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissionEventClient<$Result.GetResult<Prisma.$MissionEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MissionEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MissionEvents
     * const missionEvents = await prisma.missionEvent.findMany()
     * 
     * // Get first 10 MissionEvents
     * const missionEvents = await prisma.missionEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missionEventWithIdOnly = await prisma.missionEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MissionEventFindManyArgs>(args?: SelectSubset<T, MissionEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MissionEvent.
     * @param {MissionEventCreateArgs} args - Arguments to create a MissionEvent.
     * @example
     * // Create one MissionEvent
     * const MissionEvent = await prisma.missionEvent.create({
     *   data: {
     *     // ... data to create a MissionEvent
     *   }
     * })
     * 
     */
    create<T extends MissionEventCreateArgs>(args: SelectSubset<T, MissionEventCreateArgs<ExtArgs>>): Prisma__MissionEventClient<$Result.GetResult<Prisma.$MissionEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MissionEvents.
     * @param {MissionEventCreateManyArgs} args - Arguments to create many MissionEvents.
     * @example
     * // Create many MissionEvents
     * const missionEvent = await prisma.missionEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissionEventCreateManyArgs>(args?: SelectSubset<T, MissionEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MissionEvents and returns the data saved in the database.
     * @param {MissionEventCreateManyAndReturnArgs} args - Arguments to create many MissionEvents.
     * @example
     * // Create many MissionEvents
     * const missionEvent = await prisma.missionEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MissionEvents and only return the `id`
     * const missionEventWithIdOnly = await prisma.missionEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MissionEventCreateManyAndReturnArgs>(args?: SelectSubset<T, MissionEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MissionEvent.
     * @param {MissionEventDeleteArgs} args - Arguments to delete one MissionEvent.
     * @example
     * // Delete one MissionEvent
     * const MissionEvent = await prisma.missionEvent.delete({
     *   where: {
     *     // ... filter to delete one MissionEvent
     *   }
     * })
     * 
     */
    delete<T extends MissionEventDeleteArgs>(args: SelectSubset<T, MissionEventDeleteArgs<ExtArgs>>): Prisma__MissionEventClient<$Result.GetResult<Prisma.$MissionEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MissionEvent.
     * @param {MissionEventUpdateArgs} args - Arguments to update one MissionEvent.
     * @example
     * // Update one MissionEvent
     * const missionEvent = await prisma.missionEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissionEventUpdateArgs>(args: SelectSubset<T, MissionEventUpdateArgs<ExtArgs>>): Prisma__MissionEventClient<$Result.GetResult<Prisma.$MissionEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MissionEvents.
     * @param {MissionEventDeleteManyArgs} args - Arguments to filter MissionEvents to delete.
     * @example
     * // Delete a few MissionEvents
     * const { count } = await prisma.missionEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissionEventDeleteManyArgs>(args?: SelectSubset<T, MissionEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MissionEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MissionEvents
     * const missionEvent = await prisma.missionEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissionEventUpdateManyArgs>(args: SelectSubset<T, MissionEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MissionEvents and returns the data updated in the database.
     * @param {MissionEventUpdateManyAndReturnArgs} args - Arguments to update many MissionEvents.
     * @example
     * // Update many MissionEvents
     * const missionEvent = await prisma.missionEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MissionEvents and only return the `id`
     * const missionEventWithIdOnly = await prisma.missionEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MissionEventUpdateManyAndReturnArgs>(args: SelectSubset<T, MissionEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MissionEvent.
     * @param {MissionEventUpsertArgs} args - Arguments to update or create a MissionEvent.
     * @example
     * // Update or create a MissionEvent
     * const missionEvent = await prisma.missionEvent.upsert({
     *   create: {
     *     // ... data to create a MissionEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MissionEvent we want to update
     *   }
     * })
     */
    upsert<T extends MissionEventUpsertArgs>(args: SelectSubset<T, MissionEventUpsertArgs<ExtArgs>>): Prisma__MissionEventClient<$Result.GetResult<Prisma.$MissionEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MissionEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionEventCountArgs} args - Arguments to filter MissionEvents to count.
     * @example
     * // Count the number of MissionEvents
     * const count = await prisma.missionEvent.count({
     *   where: {
     *     // ... the filter for the MissionEvents we want to count
     *   }
     * })
    **/
    count<T extends MissionEventCountArgs>(
      args?: Subset<T, MissionEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MissionEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MissionEventAggregateArgs>(args: Subset<T, MissionEventAggregateArgs>): Prisma.PrismaPromise<GetMissionEventAggregateType<T>>

    /**
     * Group by MissionEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MissionEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissionEventGroupByArgs['orderBy'] }
        : { orderBy?: MissionEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MissionEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MissionEvent model
   */
  readonly fields: MissionEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MissionEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissionEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mission<T extends MissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MissionDefaultArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MissionEvent model
   */
  interface MissionEventFieldRefs {
    readonly id: FieldRef<"MissionEvent", 'String'>
    readonly missionId: FieldRef<"MissionEvent", 'String'>
    readonly eventType: FieldRef<"MissionEvent", 'String'>
    readonly payload: FieldRef<"MissionEvent", 'Json'>
    readonly createdAt: FieldRef<"MissionEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MissionEvent findUnique
   */
  export type MissionEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionEvent
     */
    select?: MissionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionEvent
     */
    omit?: MissionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionEventInclude<ExtArgs> | null
    /**
     * Filter, which MissionEvent to fetch.
     */
    where: MissionEventWhereUniqueInput
  }

  /**
   * MissionEvent findUniqueOrThrow
   */
  export type MissionEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionEvent
     */
    select?: MissionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionEvent
     */
    omit?: MissionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionEventInclude<ExtArgs> | null
    /**
     * Filter, which MissionEvent to fetch.
     */
    where: MissionEventWhereUniqueInput
  }

  /**
   * MissionEvent findFirst
   */
  export type MissionEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionEvent
     */
    select?: MissionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionEvent
     */
    omit?: MissionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionEventInclude<ExtArgs> | null
    /**
     * Filter, which MissionEvent to fetch.
     */
    where?: MissionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionEvents to fetch.
     */
    orderBy?: MissionEventOrderByWithRelationInput | MissionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissionEvents.
     */
    cursor?: MissionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissionEvents.
     */
    distinct?: MissionEventScalarFieldEnum | MissionEventScalarFieldEnum[]
  }

  /**
   * MissionEvent findFirstOrThrow
   */
  export type MissionEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionEvent
     */
    select?: MissionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionEvent
     */
    omit?: MissionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionEventInclude<ExtArgs> | null
    /**
     * Filter, which MissionEvent to fetch.
     */
    where?: MissionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionEvents to fetch.
     */
    orderBy?: MissionEventOrderByWithRelationInput | MissionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissionEvents.
     */
    cursor?: MissionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissionEvents.
     */
    distinct?: MissionEventScalarFieldEnum | MissionEventScalarFieldEnum[]
  }

  /**
   * MissionEvent findMany
   */
  export type MissionEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionEvent
     */
    select?: MissionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionEvent
     */
    omit?: MissionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionEventInclude<ExtArgs> | null
    /**
     * Filter, which MissionEvents to fetch.
     */
    where?: MissionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionEvents to fetch.
     */
    orderBy?: MissionEventOrderByWithRelationInput | MissionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MissionEvents.
     */
    cursor?: MissionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionEvents.
     */
    skip?: number
    distinct?: MissionEventScalarFieldEnum | MissionEventScalarFieldEnum[]
  }

  /**
   * MissionEvent create
   */
  export type MissionEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionEvent
     */
    select?: MissionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionEvent
     */
    omit?: MissionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionEventInclude<ExtArgs> | null
    /**
     * The data needed to create a MissionEvent.
     */
    data: XOR<MissionEventCreateInput, MissionEventUncheckedCreateInput>
  }

  /**
   * MissionEvent createMany
   */
  export type MissionEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MissionEvents.
     */
    data: MissionEventCreateManyInput | MissionEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MissionEvent createManyAndReturn
   */
  export type MissionEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionEvent
     */
    select?: MissionEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MissionEvent
     */
    omit?: MissionEventOmit<ExtArgs> | null
    /**
     * The data used to create many MissionEvents.
     */
    data: MissionEventCreateManyInput | MissionEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MissionEvent update
   */
  export type MissionEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionEvent
     */
    select?: MissionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionEvent
     */
    omit?: MissionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionEventInclude<ExtArgs> | null
    /**
     * The data needed to update a MissionEvent.
     */
    data: XOR<MissionEventUpdateInput, MissionEventUncheckedUpdateInput>
    /**
     * Choose, which MissionEvent to update.
     */
    where: MissionEventWhereUniqueInput
  }

  /**
   * MissionEvent updateMany
   */
  export type MissionEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MissionEvents.
     */
    data: XOR<MissionEventUpdateManyMutationInput, MissionEventUncheckedUpdateManyInput>
    /**
     * Filter which MissionEvents to update
     */
    where?: MissionEventWhereInput
    /**
     * Limit how many MissionEvents to update.
     */
    limit?: number
  }

  /**
   * MissionEvent updateManyAndReturn
   */
  export type MissionEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionEvent
     */
    select?: MissionEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MissionEvent
     */
    omit?: MissionEventOmit<ExtArgs> | null
    /**
     * The data used to update MissionEvents.
     */
    data: XOR<MissionEventUpdateManyMutationInput, MissionEventUncheckedUpdateManyInput>
    /**
     * Filter which MissionEvents to update
     */
    where?: MissionEventWhereInput
    /**
     * Limit how many MissionEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MissionEvent upsert
   */
  export type MissionEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionEvent
     */
    select?: MissionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionEvent
     */
    omit?: MissionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionEventInclude<ExtArgs> | null
    /**
     * The filter to search for the MissionEvent to update in case it exists.
     */
    where: MissionEventWhereUniqueInput
    /**
     * In case the MissionEvent found by the `where` argument doesn't exist, create a new MissionEvent with this data.
     */
    create: XOR<MissionEventCreateInput, MissionEventUncheckedCreateInput>
    /**
     * In case the MissionEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissionEventUpdateInput, MissionEventUncheckedUpdateInput>
  }

  /**
   * MissionEvent delete
   */
  export type MissionEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionEvent
     */
    select?: MissionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionEvent
     */
    omit?: MissionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionEventInclude<ExtArgs> | null
    /**
     * Filter which MissionEvent to delete.
     */
    where: MissionEventWhereUniqueInput
  }

  /**
   * MissionEvent deleteMany
   */
  export type MissionEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissionEvents to delete
     */
    where?: MissionEventWhereInput
    /**
     * Limit how many MissionEvents to delete.
     */
    limit?: number
  }

  /**
   * MissionEvent without action
   */
  export type MissionEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionEvent
     */
    select?: MissionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionEvent
     */
    omit?: MissionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionEventInclude<ExtArgs> | null
  }


  /**
   * Model MissionReport
   */

  export type AggregateMissionReport = {
    _count: MissionReportCountAggregateOutputType | null
    _avg: MissionReportAvgAggregateOutputType | null
    _sum: MissionReportSumAggregateOutputType | null
    _min: MissionReportMinAggregateOutputType | null
    _max: MissionReportMaxAggregateOutputType | null
  }

  export type MissionReportAvgAggregateOutputType = {
    durationSeconds: number | null
    distanceMeters: number | null
    coverageAreaSqm: number | null
  }

  export type MissionReportSumAggregateOutputType = {
    durationSeconds: number | null
    distanceMeters: number | null
    coverageAreaSqm: number | null
  }

  export type MissionReportMinAggregateOutputType = {
    id: string | null
    missionId: string | null
    durationSeconds: number | null
    distanceMeters: number | null
    coverageAreaSqm: number | null
    createdAt: Date | null
  }

  export type MissionReportMaxAggregateOutputType = {
    id: string | null
    missionId: string | null
    durationSeconds: number | null
    distanceMeters: number | null
    coverageAreaSqm: number | null
    createdAt: Date | null
  }

  export type MissionReportCountAggregateOutputType = {
    id: number
    missionId: number
    durationSeconds: number
    distanceMeters: number
    coverageAreaSqm: number
    createdAt: number
    _all: number
  }


  export type MissionReportAvgAggregateInputType = {
    durationSeconds?: true
    distanceMeters?: true
    coverageAreaSqm?: true
  }

  export type MissionReportSumAggregateInputType = {
    durationSeconds?: true
    distanceMeters?: true
    coverageAreaSqm?: true
  }

  export type MissionReportMinAggregateInputType = {
    id?: true
    missionId?: true
    durationSeconds?: true
    distanceMeters?: true
    coverageAreaSqm?: true
    createdAt?: true
  }

  export type MissionReportMaxAggregateInputType = {
    id?: true
    missionId?: true
    durationSeconds?: true
    distanceMeters?: true
    coverageAreaSqm?: true
    createdAt?: true
  }

  export type MissionReportCountAggregateInputType = {
    id?: true
    missionId?: true
    durationSeconds?: true
    distanceMeters?: true
    coverageAreaSqm?: true
    createdAt?: true
    _all?: true
  }

  export type MissionReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissionReport to aggregate.
     */
    where?: MissionReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionReports to fetch.
     */
    orderBy?: MissionReportOrderByWithRelationInput | MissionReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissionReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MissionReports
    **/
    _count?: true | MissionReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MissionReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MissionReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionReportMaxAggregateInputType
  }

  export type GetMissionReportAggregateType<T extends MissionReportAggregateArgs> = {
        [P in keyof T & keyof AggregateMissionReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMissionReport[P]>
      : GetScalarType<T[P], AggregateMissionReport[P]>
  }




  export type MissionReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionReportWhereInput
    orderBy?: MissionReportOrderByWithAggregationInput | MissionReportOrderByWithAggregationInput[]
    by: MissionReportScalarFieldEnum[] | MissionReportScalarFieldEnum
    having?: MissionReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionReportCountAggregateInputType | true
    _avg?: MissionReportAvgAggregateInputType
    _sum?: MissionReportSumAggregateInputType
    _min?: MissionReportMinAggregateInputType
    _max?: MissionReportMaxAggregateInputType
  }

  export type MissionReportGroupByOutputType = {
    id: string
    missionId: string
    durationSeconds: number
    distanceMeters: number
    coverageAreaSqm: number
    createdAt: Date
    _count: MissionReportCountAggregateOutputType | null
    _avg: MissionReportAvgAggregateOutputType | null
    _sum: MissionReportSumAggregateOutputType | null
    _min: MissionReportMinAggregateOutputType | null
    _max: MissionReportMaxAggregateOutputType | null
  }

  type GetMissionReportGroupByPayload<T extends MissionReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionReportGroupByOutputType[P]>
            : GetScalarType<T[P], MissionReportGroupByOutputType[P]>
        }
      >
    >


  export type MissionReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missionId?: boolean
    durationSeconds?: boolean
    distanceMeters?: boolean
    coverageAreaSqm?: boolean
    createdAt?: boolean
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missionReport"]>

  export type MissionReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missionId?: boolean
    durationSeconds?: boolean
    distanceMeters?: boolean
    coverageAreaSqm?: boolean
    createdAt?: boolean
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missionReport"]>

  export type MissionReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missionId?: boolean
    durationSeconds?: boolean
    distanceMeters?: boolean
    coverageAreaSqm?: boolean
    createdAt?: boolean
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missionReport"]>

  export type MissionReportSelectScalar = {
    id?: boolean
    missionId?: boolean
    durationSeconds?: boolean
    distanceMeters?: boolean
    coverageAreaSqm?: boolean
    createdAt?: boolean
  }

  export type MissionReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "missionId" | "durationSeconds" | "distanceMeters" | "coverageAreaSqm" | "createdAt", ExtArgs["result"]["missionReport"]>
  export type MissionReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }
  export type MissionReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }
  export type MissionReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }

  export type $MissionReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MissionReport"
    objects: {
      mission: Prisma.$MissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      missionId: string
      durationSeconds: number
      distanceMeters: number
      coverageAreaSqm: number
      createdAt: Date
    }, ExtArgs["result"]["missionReport"]>
    composites: {}
  }

  type MissionReportGetPayload<S extends boolean | null | undefined | MissionReportDefaultArgs> = $Result.GetResult<Prisma.$MissionReportPayload, S>

  type MissionReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissionReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissionReportCountAggregateInputType | true
    }

  export interface MissionReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MissionReport'], meta: { name: 'MissionReport' } }
    /**
     * Find zero or one MissionReport that matches the filter.
     * @param {MissionReportFindUniqueArgs} args - Arguments to find a MissionReport
     * @example
     * // Get one MissionReport
     * const missionReport = await prisma.missionReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionReportFindUniqueArgs>(args: SelectSubset<T, MissionReportFindUniqueArgs<ExtArgs>>): Prisma__MissionReportClient<$Result.GetResult<Prisma.$MissionReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MissionReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionReportFindUniqueOrThrowArgs} args - Arguments to find a MissionReport
     * @example
     * // Get one MissionReport
     * const missionReport = await prisma.missionReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionReportFindUniqueOrThrowArgs>(args: SelectSubset<T, MissionReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissionReportClient<$Result.GetResult<Prisma.$MissionReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MissionReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionReportFindFirstArgs} args - Arguments to find a MissionReport
     * @example
     * // Get one MissionReport
     * const missionReport = await prisma.missionReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionReportFindFirstArgs>(args?: SelectSubset<T, MissionReportFindFirstArgs<ExtArgs>>): Prisma__MissionReportClient<$Result.GetResult<Prisma.$MissionReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MissionReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionReportFindFirstOrThrowArgs} args - Arguments to find a MissionReport
     * @example
     * // Get one MissionReport
     * const missionReport = await prisma.missionReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionReportFindFirstOrThrowArgs>(args?: SelectSubset<T, MissionReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissionReportClient<$Result.GetResult<Prisma.$MissionReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MissionReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MissionReports
     * const missionReports = await prisma.missionReport.findMany()
     * 
     * // Get first 10 MissionReports
     * const missionReports = await prisma.missionReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missionReportWithIdOnly = await prisma.missionReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MissionReportFindManyArgs>(args?: SelectSubset<T, MissionReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MissionReport.
     * @param {MissionReportCreateArgs} args - Arguments to create a MissionReport.
     * @example
     * // Create one MissionReport
     * const MissionReport = await prisma.missionReport.create({
     *   data: {
     *     // ... data to create a MissionReport
     *   }
     * })
     * 
     */
    create<T extends MissionReportCreateArgs>(args: SelectSubset<T, MissionReportCreateArgs<ExtArgs>>): Prisma__MissionReportClient<$Result.GetResult<Prisma.$MissionReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MissionReports.
     * @param {MissionReportCreateManyArgs} args - Arguments to create many MissionReports.
     * @example
     * // Create many MissionReports
     * const missionReport = await prisma.missionReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissionReportCreateManyArgs>(args?: SelectSubset<T, MissionReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MissionReports and returns the data saved in the database.
     * @param {MissionReportCreateManyAndReturnArgs} args - Arguments to create many MissionReports.
     * @example
     * // Create many MissionReports
     * const missionReport = await prisma.missionReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MissionReports and only return the `id`
     * const missionReportWithIdOnly = await prisma.missionReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MissionReportCreateManyAndReturnArgs>(args?: SelectSubset<T, MissionReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MissionReport.
     * @param {MissionReportDeleteArgs} args - Arguments to delete one MissionReport.
     * @example
     * // Delete one MissionReport
     * const MissionReport = await prisma.missionReport.delete({
     *   where: {
     *     // ... filter to delete one MissionReport
     *   }
     * })
     * 
     */
    delete<T extends MissionReportDeleteArgs>(args: SelectSubset<T, MissionReportDeleteArgs<ExtArgs>>): Prisma__MissionReportClient<$Result.GetResult<Prisma.$MissionReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MissionReport.
     * @param {MissionReportUpdateArgs} args - Arguments to update one MissionReport.
     * @example
     * // Update one MissionReport
     * const missionReport = await prisma.missionReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissionReportUpdateArgs>(args: SelectSubset<T, MissionReportUpdateArgs<ExtArgs>>): Prisma__MissionReportClient<$Result.GetResult<Prisma.$MissionReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MissionReports.
     * @param {MissionReportDeleteManyArgs} args - Arguments to filter MissionReports to delete.
     * @example
     * // Delete a few MissionReports
     * const { count } = await prisma.missionReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissionReportDeleteManyArgs>(args?: SelectSubset<T, MissionReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MissionReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MissionReports
     * const missionReport = await prisma.missionReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissionReportUpdateManyArgs>(args: SelectSubset<T, MissionReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MissionReports and returns the data updated in the database.
     * @param {MissionReportUpdateManyAndReturnArgs} args - Arguments to update many MissionReports.
     * @example
     * // Update many MissionReports
     * const missionReport = await prisma.missionReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MissionReports and only return the `id`
     * const missionReportWithIdOnly = await prisma.missionReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MissionReportUpdateManyAndReturnArgs>(args: SelectSubset<T, MissionReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MissionReport.
     * @param {MissionReportUpsertArgs} args - Arguments to update or create a MissionReport.
     * @example
     * // Update or create a MissionReport
     * const missionReport = await prisma.missionReport.upsert({
     *   create: {
     *     // ... data to create a MissionReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MissionReport we want to update
     *   }
     * })
     */
    upsert<T extends MissionReportUpsertArgs>(args: SelectSubset<T, MissionReportUpsertArgs<ExtArgs>>): Prisma__MissionReportClient<$Result.GetResult<Prisma.$MissionReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MissionReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionReportCountArgs} args - Arguments to filter MissionReports to count.
     * @example
     * // Count the number of MissionReports
     * const count = await prisma.missionReport.count({
     *   where: {
     *     // ... the filter for the MissionReports we want to count
     *   }
     * })
    **/
    count<T extends MissionReportCountArgs>(
      args?: Subset<T, MissionReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MissionReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MissionReportAggregateArgs>(args: Subset<T, MissionReportAggregateArgs>): Prisma.PrismaPromise<GetMissionReportAggregateType<T>>

    /**
     * Group by MissionReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MissionReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissionReportGroupByArgs['orderBy'] }
        : { orderBy?: MissionReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MissionReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MissionReport model
   */
  readonly fields: MissionReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MissionReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissionReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mission<T extends MissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MissionDefaultArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MissionReport model
   */
  interface MissionReportFieldRefs {
    readonly id: FieldRef<"MissionReport", 'String'>
    readonly missionId: FieldRef<"MissionReport", 'String'>
    readonly durationSeconds: FieldRef<"MissionReport", 'Int'>
    readonly distanceMeters: FieldRef<"MissionReport", 'Float'>
    readonly coverageAreaSqm: FieldRef<"MissionReport", 'Float'>
    readonly createdAt: FieldRef<"MissionReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MissionReport findUnique
   */
  export type MissionReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionReport
     */
    select?: MissionReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionReport
     */
    omit?: MissionReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionReportInclude<ExtArgs> | null
    /**
     * Filter, which MissionReport to fetch.
     */
    where: MissionReportWhereUniqueInput
  }

  /**
   * MissionReport findUniqueOrThrow
   */
  export type MissionReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionReport
     */
    select?: MissionReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionReport
     */
    omit?: MissionReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionReportInclude<ExtArgs> | null
    /**
     * Filter, which MissionReport to fetch.
     */
    where: MissionReportWhereUniqueInput
  }

  /**
   * MissionReport findFirst
   */
  export type MissionReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionReport
     */
    select?: MissionReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionReport
     */
    omit?: MissionReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionReportInclude<ExtArgs> | null
    /**
     * Filter, which MissionReport to fetch.
     */
    where?: MissionReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionReports to fetch.
     */
    orderBy?: MissionReportOrderByWithRelationInput | MissionReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissionReports.
     */
    cursor?: MissionReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissionReports.
     */
    distinct?: MissionReportScalarFieldEnum | MissionReportScalarFieldEnum[]
  }

  /**
   * MissionReport findFirstOrThrow
   */
  export type MissionReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionReport
     */
    select?: MissionReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionReport
     */
    omit?: MissionReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionReportInclude<ExtArgs> | null
    /**
     * Filter, which MissionReport to fetch.
     */
    where?: MissionReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionReports to fetch.
     */
    orderBy?: MissionReportOrderByWithRelationInput | MissionReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissionReports.
     */
    cursor?: MissionReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissionReports.
     */
    distinct?: MissionReportScalarFieldEnum | MissionReportScalarFieldEnum[]
  }

  /**
   * MissionReport findMany
   */
  export type MissionReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionReport
     */
    select?: MissionReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionReport
     */
    omit?: MissionReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionReportInclude<ExtArgs> | null
    /**
     * Filter, which MissionReports to fetch.
     */
    where?: MissionReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionReports to fetch.
     */
    orderBy?: MissionReportOrderByWithRelationInput | MissionReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MissionReports.
     */
    cursor?: MissionReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionReports.
     */
    skip?: number
    distinct?: MissionReportScalarFieldEnum | MissionReportScalarFieldEnum[]
  }

  /**
   * MissionReport create
   */
  export type MissionReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionReport
     */
    select?: MissionReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionReport
     */
    omit?: MissionReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionReportInclude<ExtArgs> | null
    /**
     * The data needed to create a MissionReport.
     */
    data: XOR<MissionReportCreateInput, MissionReportUncheckedCreateInput>
  }

  /**
   * MissionReport createMany
   */
  export type MissionReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MissionReports.
     */
    data: MissionReportCreateManyInput | MissionReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MissionReport createManyAndReturn
   */
  export type MissionReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionReport
     */
    select?: MissionReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MissionReport
     */
    omit?: MissionReportOmit<ExtArgs> | null
    /**
     * The data used to create many MissionReports.
     */
    data: MissionReportCreateManyInput | MissionReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MissionReport update
   */
  export type MissionReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionReport
     */
    select?: MissionReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionReport
     */
    omit?: MissionReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionReportInclude<ExtArgs> | null
    /**
     * The data needed to update a MissionReport.
     */
    data: XOR<MissionReportUpdateInput, MissionReportUncheckedUpdateInput>
    /**
     * Choose, which MissionReport to update.
     */
    where: MissionReportWhereUniqueInput
  }

  /**
   * MissionReport updateMany
   */
  export type MissionReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MissionReports.
     */
    data: XOR<MissionReportUpdateManyMutationInput, MissionReportUncheckedUpdateManyInput>
    /**
     * Filter which MissionReports to update
     */
    where?: MissionReportWhereInput
    /**
     * Limit how many MissionReports to update.
     */
    limit?: number
  }

  /**
   * MissionReport updateManyAndReturn
   */
  export type MissionReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionReport
     */
    select?: MissionReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MissionReport
     */
    omit?: MissionReportOmit<ExtArgs> | null
    /**
     * The data used to update MissionReports.
     */
    data: XOR<MissionReportUpdateManyMutationInput, MissionReportUncheckedUpdateManyInput>
    /**
     * Filter which MissionReports to update
     */
    where?: MissionReportWhereInput
    /**
     * Limit how many MissionReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MissionReport upsert
   */
  export type MissionReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionReport
     */
    select?: MissionReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionReport
     */
    omit?: MissionReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionReportInclude<ExtArgs> | null
    /**
     * The filter to search for the MissionReport to update in case it exists.
     */
    where: MissionReportWhereUniqueInput
    /**
     * In case the MissionReport found by the `where` argument doesn't exist, create a new MissionReport with this data.
     */
    create: XOR<MissionReportCreateInput, MissionReportUncheckedCreateInput>
    /**
     * In case the MissionReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissionReportUpdateInput, MissionReportUncheckedUpdateInput>
  }

  /**
   * MissionReport delete
   */
  export type MissionReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionReport
     */
    select?: MissionReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionReport
     */
    omit?: MissionReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionReportInclude<ExtArgs> | null
    /**
     * Filter which MissionReport to delete.
     */
    where: MissionReportWhereUniqueInput
  }

  /**
   * MissionReport deleteMany
   */
  export type MissionReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissionReports to delete
     */
    where?: MissionReportWhereInput
    /**
     * Limit how many MissionReports to delete.
     */
    limit?: number
  }

  /**
   * MissionReport without action
   */
  export type MissionReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionReport
     */
    select?: MissionReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionReport
     */
    omit?: MissionReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionReportInclude<ExtArgs> | null
  }


  /**
   * Model OrganizationMetrics
   */

  export type AggregateOrganizationMetrics = {
    _count: OrganizationMetricsCountAggregateOutputType | null
    _avg: OrganizationMetricsAvgAggregateOutputType | null
    _sum: OrganizationMetricsSumAggregateOutputType | null
    _min: OrganizationMetricsMinAggregateOutputType | null
    _max: OrganizationMetricsMaxAggregateOutputType | null
  }

  export type OrganizationMetricsAvgAggregateOutputType = {
    totalMissions: number | null
    totalFlightTimeSeconds: number | null
    averageMissionDurationSeconds: number | null
  }

  export type OrganizationMetricsSumAggregateOutputType = {
    totalMissions: number | null
    totalFlightTimeSeconds: number | null
    averageMissionDurationSeconds: number | null
  }

  export type OrganizationMetricsMinAggregateOutputType = {
    id: string | null
    totalMissions: number | null
    totalFlightTimeSeconds: number | null
    averageMissionDurationSeconds: number | null
    computedAt: Date | null
  }

  export type OrganizationMetricsMaxAggregateOutputType = {
    id: string | null
    totalMissions: number | null
    totalFlightTimeSeconds: number | null
    averageMissionDurationSeconds: number | null
    computedAt: Date | null
  }

  export type OrganizationMetricsCountAggregateOutputType = {
    id: number
    totalMissions: number
    totalFlightTimeSeconds: number
    averageMissionDurationSeconds: number
    computedAt: number
    _all: number
  }


  export type OrganizationMetricsAvgAggregateInputType = {
    totalMissions?: true
    totalFlightTimeSeconds?: true
    averageMissionDurationSeconds?: true
  }

  export type OrganizationMetricsSumAggregateInputType = {
    totalMissions?: true
    totalFlightTimeSeconds?: true
    averageMissionDurationSeconds?: true
  }

  export type OrganizationMetricsMinAggregateInputType = {
    id?: true
    totalMissions?: true
    totalFlightTimeSeconds?: true
    averageMissionDurationSeconds?: true
    computedAt?: true
  }

  export type OrganizationMetricsMaxAggregateInputType = {
    id?: true
    totalMissions?: true
    totalFlightTimeSeconds?: true
    averageMissionDurationSeconds?: true
    computedAt?: true
  }

  export type OrganizationMetricsCountAggregateInputType = {
    id?: true
    totalMissions?: true
    totalFlightTimeSeconds?: true
    averageMissionDurationSeconds?: true
    computedAt?: true
    _all?: true
  }

  export type OrganizationMetricsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationMetrics to aggregate.
     */
    where?: OrganizationMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMetrics to fetch.
     */
    orderBy?: OrganizationMetricsOrderByWithRelationInput | OrganizationMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrganizationMetrics
    **/
    _count?: true | OrganizationMetricsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationMetricsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationMetricsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMetricsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMetricsMaxAggregateInputType
  }

  export type GetOrganizationMetricsAggregateType<T extends OrganizationMetricsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizationMetrics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizationMetrics[P]>
      : GetScalarType<T[P], AggregateOrganizationMetrics[P]>
  }




  export type OrganizationMetricsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMetricsWhereInput
    orderBy?: OrganizationMetricsOrderByWithAggregationInput | OrganizationMetricsOrderByWithAggregationInput[]
    by: OrganizationMetricsScalarFieldEnum[] | OrganizationMetricsScalarFieldEnum
    having?: OrganizationMetricsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationMetricsCountAggregateInputType | true
    _avg?: OrganizationMetricsAvgAggregateInputType
    _sum?: OrganizationMetricsSumAggregateInputType
    _min?: OrganizationMetricsMinAggregateInputType
    _max?: OrganizationMetricsMaxAggregateInputType
  }

  export type OrganizationMetricsGroupByOutputType = {
    id: string
    totalMissions: number
    totalFlightTimeSeconds: number
    averageMissionDurationSeconds: number
    computedAt: Date
    _count: OrganizationMetricsCountAggregateOutputType | null
    _avg: OrganizationMetricsAvgAggregateOutputType | null
    _sum: OrganizationMetricsSumAggregateOutputType | null
    _min: OrganizationMetricsMinAggregateOutputType | null
    _max: OrganizationMetricsMaxAggregateOutputType | null
  }

  type GetOrganizationMetricsGroupByPayload<T extends OrganizationMetricsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationMetricsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationMetricsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationMetricsGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationMetricsGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationMetricsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalMissions?: boolean
    totalFlightTimeSeconds?: boolean
    averageMissionDurationSeconds?: boolean
    computedAt?: boolean
  }, ExtArgs["result"]["organizationMetrics"]>

  export type OrganizationMetricsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalMissions?: boolean
    totalFlightTimeSeconds?: boolean
    averageMissionDurationSeconds?: boolean
    computedAt?: boolean
  }, ExtArgs["result"]["organizationMetrics"]>

  export type OrganizationMetricsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalMissions?: boolean
    totalFlightTimeSeconds?: boolean
    averageMissionDurationSeconds?: boolean
    computedAt?: boolean
  }, ExtArgs["result"]["organizationMetrics"]>

  export type OrganizationMetricsSelectScalar = {
    id?: boolean
    totalMissions?: boolean
    totalFlightTimeSeconds?: boolean
    averageMissionDurationSeconds?: boolean
    computedAt?: boolean
  }

  export type OrganizationMetricsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "totalMissions" | "totalFlightTimeSeconds" | "averageMissionDurationSeconds" | "computedAt", ExtArgs["result"]["organizationMetrics"]>

  export type $OrganizationMetricsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrganizationMetrics"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      totalMissions: number
      totalFlightTimeSeconds: number
      averageMissionDurationSeconds: number
      computedAt: Date
    }, ExtArgs["result"]["organizationMetrics"]>
    composites: {}
  }

  type OrganizationMetricsGetPayload<S extends boolean | null | undefined | OrganizationMetricsDefaultArgs> = $Result.GetResult<Prisma.$OrganizationMetricsPayload, S>

  type OrganizationMetricsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationMetricsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationMetricsCountAggregateInputType | true
    }

  export interface OrganizationMetricsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrganizationMetrics'], meta: { name: 'OrganizationMetrics' } }
    /**
     * Find zero or one OrganizationMetrics that matches the filter.
     * @param {OrganizationMetricsFindUniqueArgs} args - Arguments to find a OrganizationMetrics
     * @example
     * // Get one OrganizationMetrics
     * const organizationMetrics = await prisma.organizationMetrics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationMetricsFindUniqueArgs>(args: SelectSubset<T, OrganizationMetricsFindUniqueArgs<ExtArgs>>): Prisma__OrganizationMetricsClient<$Result.GetResult<Prisma.$OrganizationMetricsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrganizationMetrics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationMetricsFindUniqueOrThrowArgs} args - Arguments to find a OrganizationMetrics
     * @example
     * // Get one OrganizationMetrics
     * const organizationMetrics = await prisma.organizationMetrics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationMetricsFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationMetricsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationMetricsClient<$Result.GetResult<Prisma.$OrganizationMetricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMetricsFindFirstArgs} args - Arguments to find a OrganizationMetrics
     * @example
     * // Get one OrganizationMetrics
     * const organizationMetrics = await prisma.organizationMetrics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationMetricsFindFirstArgs>(args?: SelectSubset<T, OrganizationMetricsFindFirstArgs<ExtArgs>>): Prisma__OrganizationMetricsClient<$Result.GetResult<Prisma.$OrganizationMetricsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationMetrics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMetricsFindFirstOrThrowArgs} args - Arguments to find a OrganizationMetrics
     * @example
     * // Get one OrganizationMetrics
     * const organizationMetrics = await prisma.organizationMetrics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationMetricsFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationMetricsFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationMetricsClient<$Result.GetResult<Prisma.$OrganizationMetricsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrganizationMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMetricsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrganizationMetrics
     * const organizationMetrics = await prisma.organizationMetrics.findMany()
     * 
     * // Get first 10 OrganizationMetrics
     * const organizationMetrics = await prisma.organizationMetrics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationMetricsWithIdOnly = await prisma.organizationMetrics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationMetricsFindManyArgs>(args?: SelectSubset<T, OrganizationMetricsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMetricsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrganizationMetrics.
     * @param {OrganizationMetricsCreateArgs} args - Arguments to create a OrganizationMetrics.
     * @example
     * // Create one OrganizationMetrics
     * const OrganizationMetrics = await prisma.organizationMetrics.create({
     *   data: {
     *     // ... data to create a OrganizationMetrics
     *   }
     * })
     * 
     */
    create<T extends OrganizationMetricsCreateArgs>(args: SelectSubset<T, OrganizationMetricsCreateArgs<ExtArgs>>): Prisma__OrganizationMetricsClient<$Result.GetResult<Prisma.$OrganizationMetricsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrganizationMetrics.
     * @param {OrganizationMetricsCreateManyArgs} args - Arguments to create many OrganizationMetrics.
     * @example
     * // Create many OrganizationMetrics
     * const organizationMetrics = await prisma.organizationMetrics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationMetricsCreateManyArgs>(args?: SelectSubset<T, OrganizationMetricsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrganizationMetrics and returns the data saved in the database.
     * @param {OrganizationMetricsCreateManyAndReturnArgs} args - Arguments to create many OrganizationMetrics.
     * @example
     * // Create many OrganizationMetrics
     * const organizationMetrics = await prisma.organizationMetrics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrganizationMetrics and only return the `id`
     * const organizationMetricsWithIdOnly = await prisma.organizationMetrics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationMetricsCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationMetricsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMetricsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrganizationMetrics.
     * @param {OrganizationMetricsDeleteArgs} args - Arguments to delete one OrganizationMetrics.
     * @example
     * // Delete one OrganizationMetrics
     * const OrganizationMetrics = await prisma.organizationMetrics.delete({
     *   where: {
     *     // ... filter to delete one OrganizationMetrics
     *   }
     * })
     * 
     */
    delete<T extends OrganizationMetricsDeleteArgs>(args: SelectSubset<T, OrganizationMetricsDeleteArgs<ExtArgs>>): Prisma__OrganizationMetricsClient<$Result.GetResult<Prisma.$OrganizationMetricsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrganizationMetrics.
     * @param {OrganizationMetricsUpdateArgs} args - Arguments to update one OrganizationMetrics.
     * @example
     * // Update one OrganizationMetrics
     * const organizationMetrics = await prisma.organizationMetrics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationMetricsUpdateArgs>(args: SelectSubset<T, OrganizationMetricsUpdateArgs<ExtArgs>>): Prisma__OrganizationMetricsClient<$Result.GetResult<Prisma.$OrganizationMetricsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrganizationMetrics.
     * @param {OrganizationMetricsDeleteManyArgs} args - Arguments to filter OrganizationMetrics to delete.
     * @example
     * // Delete a few OrganizationMetrics
     * const { count } = await prisma.organizationMetrics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationMetricsDeleteManyArgs>(args?: SelectSubset<T, OrganizationMetricsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMetricsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrganizationMetrics
     * const organizationMetrics = await prisma.organizationMetrics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationMetricsUpdateManyArgs>(args: SelectSubset<T, OrganizationMetricsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationMetrics and returns the data updated in the database.
     * @param {OrganizationMetricsUpdateManyAndReturnArgs} args - Arguments to update many OrganizationMetrics.
     * @example
     * // Update many OrganizationMetrics
     * const organizationMetrics = await prisma.organizationMetrics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrganizationMetrics and only return the `id`
     * const organizationMetricsWithIdOnly = await prisma.organizationMetrics.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationMetricsUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationMetricsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMetricsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrganizationMetrics.
     * @param {OrganizationMetricsUpsertArgs} args - Arguments to update or create a OrganizationMetrics.
     * @example
     * // Update or create a OrganizationMetrics
     * const organizationMetrics = await prisma.organizationMetrics.upsert({
     *   create: {
     *     // ... data to create a OrganizationMetrics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrganizationMetrics we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationMetricsUpsertArgs>(args: SelectSubset<T, OrganizationMetricsUpsertArgs<ExtArgs>>): Prisma__OrganizationMetricsClient<$Result.GetResult<Prisma.$OrganizationMetricsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrganizationMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMetricsCountArgs} args - Arguments to filter OrganizationMetrics to count.
     * @example
     * // Count the number of OrganizationMetrics
     * const count = await prisma.organizationMetrics.count({
     *   where: {
     *     // ... the filter for the OrganizationMetrics we want to count
     *   }
     * })
    **/
    count<T extends OrganizationMetricsCountArgs>(
      args?: Subset<T, OrganizationMetricsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationMetricsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrganizationMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMetricsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationMetricsAggregateArgs>(args: Subset<T, OrganizationMetricsAggregateArgs>): Prisma.PrismaPromise<GetOrganizationMetricsAggregateType<T>>

    /**
     * Group by OrganizationMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMetricsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationMetricsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationMetricsGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationMetricsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationMetricsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationMetricsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrganizationMetrics model
   */
  readonly fields: OrganizationMetricsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrganizationMetrics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationMetricsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrganizationMetrics model
   */
  interface OrganizationMetricsFieldRefs {
    readonly id: FieldRef<"OrganizationMetrics", 'String'>
    readonly totalMissions: FieldRef<"OrganizationMetrics", 'Int'>
    readonly totalFlightTimeSeconds: FieldRef<"OrganizationMetrics", 'Int'>
    readonly averageMissionDurationSeconds: FieldRef<"OrganizationMetrics", 'Int'>
    readonly computedAt: FieldRef<"OrganizationMetrics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrganizationMetrics findUnique
   */
  export type OrganizationMetricsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMetrics
     */
    select?: OrganizationMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMetrics
     */
    omit?: OrganizationMetricsOmit<ExtArgs> | null
    /**
     * Filter, which OrganizationMetrics to fetch.
     */
    where: OrganizationMetricsWhereUniqueInput
  }

  /**
   * OrganizationMetrics findUniqueOrThrow
   */
  export type OrganizationMetricsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMetrics
     */
    select?: OrganizationMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMetrics
     */
    omit?: OrganizationMetricsOmit<ExtArgs> | null
    /**
     * Filter, which OrganizationMetrics to fetch.
     */
    where: OrganizationMetricsWhereUniqueInput
  }

  /**
   * OrganizationMetrics findFirst
   */
  export type OrganizationMetricsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMetrics
     */
    select?: OrganizationMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMetrics
     */
    omit?: OrganizationMetricsOmit<ExtArgs> | null
    /**
     * Filter, which OrganizationMetrics to fetch.
     */
    where?: OrganizationMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMetrics to fetch.
     */
    orderBy?: OrganizationMetricsOrderByWithRelationInput | OrganizationMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationMetrics.
     */
    cursor?: OrganizationMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationMetrics.
     */
    distinct?: OrganizationMetricsScalarFieldEnum | OrganizationMetricsScalarFieldEnum[]
  }

  /**
   * OrganizationMetrics findFirstOrThrow
   */
  export type OrganizationMetricsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMetrics
     */
    select?: OrganizationMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMetrics
     */
    omit?: OrganizationMetricsOmit<ExtArgs> | null
    /**
     * Filter, which OrganizationMetrics to fetch.
     */
    where?: OrganizationMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMetrics to fetch.
     */
    orderBy?: OrganizationMetricsOrderByWithRelationInput | OrganizationMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationMetrics.
     */
    cursor?: OrganizationMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationMetrics.
     */
    distinct?: OrganizationMetricsScalarFieldEnum | OrganizationMetricsScalarFieldEnum[]
  }

  /**
   * OrganizationMetrics findMany
   */
  export type OrganizationMetricsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMetrics
     */
    select?: OrganizationMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMetrics
     */
    omit?: OrganizationMetricsOmit<ExtArgs> | null
    /**
     * Filter, which OrganizationMetrics to fetch.
     */
    where?: OrganizationMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMetrics to fetch.
     */
    orderBy?: OrganizationMetricsOrderByWithRelationInput | OrganizationMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrganizationMetrics.
     */
    cursor?: OrganizationMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMetrics.
     */
    skip?: number
    distinct?: OrganizationMetricsScalarFieldEnum | OrganizationMetricsScalarFieldEnum[]
  }

  /**
   * OrganizationMetrics create
   */
  export type OrganizationMetricsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMetrics
     */
    select?: OrganizationMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMetrics
     */
    omit?: OrganizationMetricsOmit<ExtArgs> | null
    /**
     * The data needed to create a OrganizationMetrics.
     */
    data?: XOR<OrganizationMetricsCreateInput, OrganizationMetricsUncheckedCreateInput>
  }

  /**
   * OrganizationMetrics createMany
   */
  export type OrganizationMetricsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrganizationMetrics.
     */
    data: OrganizationMetricsCreateManyInput | OrganizationMetricsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrganizationMetrics createManyAndReturn
   */
  export type OrganizationMetricsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMetrics
     */
    select?: OrganizationMetricsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMetrics
     */
    omit?: OrganizationMetricsOmit<ExtArgs> | null
    /**
     * The data used to create many OrganizationMetrics.
     */
    data: OrganizationMetricsCreateManyInput | OrganizationMetricsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrganizationMetrics update
   */
  export type OrganizationMetricsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMetrics
     */
    select?: OrganizationMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMetrics
     */
    omit?: OrganizationMetricsOmit<ExtArgs> | null
    /**
     * The data needed to update a OrganizationMetrics.
     */
    data: XOR<OrganizationMetricsUpdateInput, OrganizationMetricsUncheckedUpdateInput>
    /**
     * Choose, which OrganizationMetrics to update.
     */
    where: OrganizationMetricsWhereUniqueInput
  }

  /**
   * OrganizationMetrics updateMany
   */
  export type OrganizationMetricsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrganizationMetrics.
     */
    data: XOR<OrganizationMetricsUpdateManyMutationInput, OrganizationMetricsUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationMetrics to update
     */
    where?: OrganizationMetricsWhereInput
    /**
     * Limit how many OrganizationMetrics to update.
     */
    limit?: number
  }

  /**
   * OrganizationMetrics updateManyAndReturn
   */
  export type OrganizationMetricsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMetrics
     */
    select?: OrganizationMetricsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMetrics
     */
    omit?: OrganizationMetricsOmit<ExtArgs> | null
    /**
     * The data used to update OrganizationMetrics.
     */
    data: XOR<OrganizationMetricsUpdateManyMutationInput, OrganizationMetricsUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationMetrics to update
     */
    where?: OrganizationMetricsWhereInput
    /**
     * Limit how many OrganizationMetrics to update.
     */
    limit?: number
  }

  /**
   * OrganizationMetrics upsert
   */
  export type OrganizationMetricsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMetrics
     */
    select?: OrganizationMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMetrics
     */
    omit?: OrganizationMetricsOmit<ExtArgs> | null
    /**
     * The filter to search for the OrganizationMetrics to update in case it exists.
     */
    where: OrganizationMetricsWhereUniqueInput
    /**
     * In case the OrganizationMetrics found by the `where` argument doesn't exist, create a new OrganizationMetrics with this data.
     */
    create: XOR<OrganizationMetricsCreateInput, OrganizationMetricsUncheckedCreateInput>
    /**
     * In case the OrganizationMetrics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationMetricsUpdateInput, OrganizationMetricsUncheckedUpdateInput>
  }

  /**
   * OrganizationMetrics delete
   */
  export type OrganizationMetricsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMetrics
     */
    select?: OrganizationMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMetrics
     */
    omit?: OrganizationMetricsOmit<ExtArgs> | null
    /**
     * Filter which OrganizationMetrics to delete.
     */
    where: OrganizationMetricsWhereUniqueInput
  }

  /**
   * OrganizationMetrics deleteMany
   */
  export type OrganizationMetricsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationMetrics to delete
     */
    where?: OrganizationMetricsWhereInput
    /**
     * Limit how many OrganizationMetrics to delete.
     */
    limit?: number
  }

  /**
   * OrganizationMetrics without action
   */
  export type OrganizationMetricsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMetrics
     */
    select?: OrganizationMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMetrics
     */
    omit?: OrganizationMetricsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DroneScalarFieldEnum: {
    id: 'id',
    name: 'name',
    batteryLevel: 'batteryLevel',
    status: 'status',
    health: 'health',
    lastSeenAt: 'lastSeenAt',
    homeBaseLat: 'homeBaseLat',
    homeBaseLng: 'homeBaseLng',
    maxRange: 'maxRange',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DroneScalarFieldEnum = (typeof DroneScalarFieldEnum)[keyof typeof DroneScalarFieldEnum]


  export const MissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    pattern: 'pattern',
    altitude: 'altitude',
    overlapPercentage: 'overlapPercentage',
    speed: 'speed',
    surveyArea: 'surveyArea',
    patternConfig: 'patternConfig',
    assignedDroneId: 'assignedDroneId',
    abortReason: 'abortReason',
    abortReasonText: 'abortReasonText',
    phase: 'phase',
    phaseStartedAt: 'phaseStartedAt',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    pausedAt: 'pausedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MissionScalarFieldEnum = (typeof MissionScalarFieldEnum)[keyof typeof MissionScalarFieldEnum]


  export const MissionFlightPathScalarFieldEnum: {
    id: 'id',
    missionId: 'missionId',
    waypoints: 'waypoints',
    waypointCount: 'waypointCount',
    estimatedDistanceMeters: 'estimatedDistanceMeters',
    estimatedDurationSeconds: 'estimatedDurationSeconds',
    createdAt: 'createdAt'
  };

  export type MissionFlightPathScalarFieldEnum = (typeof MissionFlightPathScalarFieldEnum)[keyof typeof MissionFlightPathScalarFieldEnum]


  export const MissionTelemetryScalarFieldEnum: {
    id: 'id',
    missionId: 'missionId',
    latitude: 'latitude',
    longitude: 'longitude',
    altitude: 'altitude',
    heading: 'heading',
    speed: 'speed',
    phase: 'phase',
    progress: 'progress',
    etaSeconds: 'etaSeconds',
    waypointIndex: 'waypointIndex',
    distanceTraveled: 'distanceTraveled',
    distanceRemaining: 'distanceRemaining',
    batteryLevel: 'batteryLevel',
    batteryVoltage: 'batteryVoltage',
    signalStrength: 'signalStrength',
    motorTemp: 'motorTemp',
    airQualityIndex: 'airQualityIndex',
    temperature: 'temperature',
    humidity: 'humidity',
    particulateMatter: 'particulateMatter',
    recordedAt: 'recordedAt'
  };

  export type MissionTelemetryScalarFieldEnum = (typeof MissionTelemetryScalarFieldEnum)[keyof typeof MissionTelemetryScalarFieldEnum]


  export const MissionEventScalarFieldEnum: {
    id: 'id',
    missionId: 'missionId',
    eventType: 'eventType',
    payload: 'payload',
    createdAt: 'createdAt'
  };

  export type MissionEventScalarFieldEnum = (typeof MissionEventScalarFieldEnum)[keyof typeof MissionEventScalarFieldEnum]


  export const MissionReportScalarFieldEnum: {
    id: 'id',
    missionId: 'missionId',
    durationSeconds: 'durationSeconds',
    distanceMeters: 'distanceMeters',
    coverageAreaSqm: 'coverageAreaSqm',
    createdAt: 'createdAt'
  };

  export type MissionReportScalarFieldEnum = (typeof MissionReportScalarFieldEnum)[keyof typeof MissionReportScalarFieldEnum]


  export const OrganizationMetricsScalarFieldEnum: {
    id: 'id',
    totalMissions: 'totalMissions',
    totalFlightTimeSeconds: 'totalFlightTimeSeconds',
    averageMissionDurationSeconds: 'averageMissionDurationSeconds',
    computedAt: 'computedAt'
  };

  export type OrganizationMetricsScalarFieldEnum = (typeof OrganizationMetricsScalarFieldEnum)[keyof typeof OrganizationMetricsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DroneStatus'
   */
  export type EnumDroneStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DroneStatus'>
    


  /**
   * Reference to a field of type 'DroneStatus[]'
   */
  export type ListEnumDroneStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DroneStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'MissionStatus'
   */
  export type EnumMissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MissionStatus'>
    


  /**
   * Reference to a field of type 'MissionStatus[]'
   */
  export type ListEnumMissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MissionStatus[]'>
    


  /**
   * Reference to a field of type 'MissionPattern'
   */
  export type EnumMissionPatternFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MissionPattern'>
    


  /**
   * Reference to a field of type 'MissionPattern[]'
   */
  export type ListEnumMissionPatternFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MissionPattern[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'AbortReason'
   */
  export type EnumAbortReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AbortReason'>
    


  /**
   * Reference to a field of type 'AbortReason[]'
   */
  export type ListEnumAbortReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AbortReason[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    
  /**
   * Deep Input Types
   */


  export type DroneWhereInput = {
    AND?: DroneWhereInput | DroneWhereInput[]
    OR?: DroneWhereInput[]
    NOT?: DroneWhereInput | DroneWhereInput[]
    id?: StringFilter<"Drone"> | string
    name?: StringFilter<"Drone"> | string
    batteryLevel?: IntFilter<"Drone"> | number
    status?: EnumDroneStatusFilter<"Drone"> | $Enums.DroneStatus
    health?: StringFilter<"Drone"> | string
    lastSeenAt?: DateTimeNullableFilter<"Drone"> | Date | string | null
    homeBaseLat?: FloatFilter<"Drone"> | number
    homeBaseLng?: FloatFilter<"Drone"> | number
    maxRange?: FloatFilter<"Drone"> | number
    createdAt?: DateTimeFilter<"Drone"> | Date | string
    updatedAt?: DateTimeFilter<"Drone"> | Date | string
    missions?: MissionListRelationFilter
  }

  export type DroneOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    batteryLevel?: SortOrder
    status?: SortOrder
    health?: SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    homeBaseLat?: SortOrder
    homeBaseLng?: SortOrder
    maxRange?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    missions?: MissionOrderByRelationAggregateInput
  }

  export type DroneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DroneWhereInput | DroneWhereInput[]
    OR?: DroneWhereInput[]
    NOT?: DroneWhereInput | DroneWhereInput[]
    name?: StringFilter<"Drone"> | string
    batteryLevel?: IntFilter<"Drone"> | number
    status?: EnumDroneStatusFilter<"Drone"> | $Enums.DroneStatus
    health?: StringFilter<"Drone"> | string
    lastSeenAt?: DateTimeNullableFilter<"Drone"> | Date | string | null
    homeBaseLat?: FloatFilter<"Drone"> | number
    homeBaseLng?: FloatFilter<"Drone"> | number
    maxRange?: FloatFilter<"Drone"> | number
    createdAt?: DateTimeFilter<"Drone"> | Date | string
    updatedAt?: DateTimeFilter<"Drone"> | Date | string
    missions?: MissionListRelationFilter
  }, "id">

  export type DroneOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    batteryLevel?: SortOrder
    status?: SortOrder
    health?: SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    homeBaseLat?: SortOrder
    homeBaseLng?: SortOrder
    maxRange?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DroneCountOrderByAggregateInput
    _avg?: DroneAvgOrderByAggregateInput
    _max?: DroneMaxOrderByAggregateInput
    _min?: DroneMinOrderByAggregateInput
    _sum?: DroneSumOrderByAggregateInput
  }

  export type DroneScalarWhereWithAggregatesInput = {
    AND?: DroneScalarWhereWithAggregatesInput | DroneScalarWhereWithAggregatesInput[]
    OR?: DroneScalarWhereWithAggregatesInput[]
    NOT?: DroneScalarWhereWithAggregatesInput | DroneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Drone"> | string
    name?: StringWithAggregatesFilter<"Drone"> | string
    batteryLevel?: IntWithAggregatesFilter<"Drone"> | number
    status?: EnumDroneStatusWithAggregatesFilter<"Drone"> | $Enums.DroneStatus
    health?: StringWithAggregatesFilter<"Drone"> | string
    lastSeenAt?: DateTimeNullableWithAggregatesFilter<"Drone"> | Date | string | null
    homeBaseLat?: FloatWithAggregatesFilter<"Drone"> | number
    homeBaseLng?: FloatWithAggregatesFilter<"Drone"> | number
    maxRange?: FloatWithAggregatesFilter<"Drone"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Drone"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Drone"> | Date | string
  }

  export type MissionWhereInput = {
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    id?: StringFilter<"Mission"> | string
    name?: StringFilter<"Mission"> | string
    status?: EnumMissionStatusFilter<"Mission"> | $Enums.MissionStatus
    pattern?: EnumMissionPatternFilter<"Mission"> | $Enums.MissionPattern
    altitude?: IntFilter<"Mission"> | number
    overlapPercentage?: IntFilter<"Mission"> | number
    speed?: IntFilter<"Mission"> | number
    surveyArea?: JsonFilter<"Mission">
    patternConfig?: JsonNullableFilter<"Mission">
    assignedDroneId?: StringNullableFilter<"Mission"> | string | null
    abortReason?: EnumAbortReasonNullableFilter<"Mission"> | $Enums.AbortReason | null
    abortReasonText?: StringNullableFilter<"Mission"> | string | null
    phase?: StringNullableFilter<"Mission"> | string | null
    phaseStartedAt?: DateTimeNullableFilter<"Mission"> | Date | string | null
    startedAt?: DateTimeNullableFilter<"Mission"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Mission"> | Date | string | null
    pausedAt?: DateTimeNullableFilter<"Mission"> | Date | string | null
    createdAt?: DateTimeFilter<"Mission"> | Date | string
    updatedAt?: DateTimeFilter<"Mission"> | Date | string
    assignedDrone?: XOR<DroneNullableScalarRelationFilter, DroneWhereInput> | null
    flightPath?: XOR<MissionFlightPathNullableScalarRelationFilter, MissionFlightPathWhereInput> | null
    telemetry?: MissionTelemetryListRelationFilter
    events?: MissionEventListRelationFilter
    report?: XOR<MissionReportNullableScalarRelationFilter, MissionReportWhereInput> | null
  }

  export type MissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    pattern?: SortOrder
    altitude?: SortOrder
    overlapPercentage?: SortOrder
    speed?: SortOrder
    surveyArea?: SortOrder
    patternConfig?: SortOrderInput | SortOrder
    assignedDroneId?: SortOrderInput | SortOrder
    abortReason?: SortOrderInput | SortOrder
    abortReasonText?: SortOrderInput | SortOrder
    phase?: SortOrderInput | SortOrder
    phaseStartedAt?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    pausedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignedDrone?: DroneOrderByWithRelationInput
    flightPath?: MissionFlightPathOrderByWithRelationInput
    telemetry?: MissionTelemetryOrderByRelationAggregateInput
    events?: MissionEventOrderByRelationAggregateInput
    report?: MissionReportOrderByWithRelationInput
  }

  export type MissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    name?: StringFilter<"Mission"> | string
    status?: EnumMissionStatusFilter<"Mission"> | $Enums.MissionStatus
    pattern?: EnumMissionPatternFilter<"Mission"> | $Enums.MissionPattern
    altitude?: IntFilter<"Mission"> | number
    overlapPercentage?: IntFilter<"Mission"> | number
    speed?: IntFilter<"Mission"> | number
    surveyArea?: JsonFilter<"Mission">
    patternConfig?: JsonNullableFilter<"Mission">
    assignedDroneId?: StringNullableFilter<"Mission"> | string | null
    abortReason?: EnumAbortReasonNullableFilter<"Mission"> | $Enums.AbortReason | null
    abortReasonText?: StringNullableFilter<"Mission"> | string | null
    phase?: StringNullableFilter<"Mission"> | string | null
    phaseStartedAt?: DateTimeNullableFilter<"Mission"> | Date | string | null
    startedAt?: DateTimeNullableFilter<"Mission"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Mission"> | Date | string | null
    pausedAt?: DateTimeNullableFilter<"Mission"> | Date | string | null
    createdAt?: DateTimeFilter<"Mission"> | Date | string
    updatedAt?: DateTimeFilter<"Mission"> | Date | string
    assignedDrone?: XOR<DroneNullableScalarRelationFilter, DroneWhereInput> | null
    flightPath?: XOR<MissionFlightPathNullableScalarRelationFilter, MissionFlightPathWhereInput> | null
    telemetry?: MissionTelemetryListRelationFilter
    events?: MissionEventListRelationFilter
    report?: XOR<MissionReportNullableScalarRelationFilter, MissionReportWhereInput> | null
  }, "id">

  export type MissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    pattern?: SortOrder
    altitude?: SortOrder
    overlapPercentage?: SortOrder
    speed?: SortOrder
    surveyArea?: SortOrder
    patternConfig?: SortOrderInput | SortOrder
    assignedDroneId?: SortOrderInput | SortOrder
    abortReason?: SortOrderInput | SortOrder
    abortReasonText?: SortOrderInput | SortOrder
    phase?: SortOrderInput | SortOrder
    phaseStartedAt?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    pausedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MissionCountOrderByAggregateInput
    _avg?: MissionAvgOrderByAggregateInput
    _max?: MissionMaxOrderByAggregateInput
    _min?: MissionMinOrderByAggregateInput
    _sum?: MissionSumOrderByAggregateInput
  }

  export type MissionScalarWhereWithAggregatesInput = {
    AND?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    OR?: MissionScalarWhereWithAggregatesInput[]
    NOT?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mission"> | string
    name?: StringWithAggregatesFilter<"Mission"> | string
    status?: EnumMissionStatusWithAggregatesFilter<"Mission"> | $Enums.MissionStatus
    pattern?: EnumMissionPatternWithAggregatesFilter<"Mission"> | $Enums.MissionPattern
    altitude?: IntWithAggregatesFilter<"Mission"> | number
    overlapPercentage?: IntWithAggregatesFilter<"Mission"> | number
    speed?: IntWithAggregatesFilter<"Mission"> | number
    surveyArea?: JsonWithAggregatesFilter<"Mission">
    patternConfig?: JsonNullableWithAggregatesFilter<"Mission">
    assignedDroneId?: StringNullableWithAggregatesFilter<"Mission"> | string | null
    abortReason?: EnumAbortReasonNullableWithAggregatesFilter<"Mission"> | $Enums.AbortReason | null
    abortReasonText?: StringNullableWithAggregatesFilter<"Mission"> | string | null
    phase?: StringNullableWithAggregatesFilter<"Mission"> | string | null
    phaseStartedAt?: DateTimeNullableWithAggregatesFilter<"Mission"> | Date | string | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"Mission"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Mission"> | Date | string | null
    pausedAt?: DateTimeNullableWithAggregatesFilter<"Mission"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Mission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Mission"> | Date | string
  }

  export type MissionFlightPathWhereInput = {
    AND?: MissionFlightPathWhereInput | MissionFlightPathWhereInput[]
    OR?: MissionFlightPathWhereInput[]
    NOT?: MissionFlightPathWhereInput | MissionFlightPathWhereInput[]
    id?: StringFilter<"MissionFlightPath"> | string
    missionId?: StringFilter<"MissionFlightPath"> | string
    waypoints?: JsonFilter<"MissionFlightPath">
    waypointCount?: IntFilter<"MissionFlightPath"> | number
    estimatedDistanceMeters?: FloatFilter<"MissionFlightPath"> | number
    estimatedDurationSeconds?: IntFilter<"MissionFlightPath"> | number
    createdAt?: DateTimeFilter<"MissionFlightPath"> | Date | string
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
  }

  export type MissionFlightPathOrderByWithRelationInput = {
    id?: SortOrder
    missionId?: SortOrder
    waypoints?: SortOrder
    waypointCount?: SortOrder
    estimatedDistanceMeters?: SortOrder
    estimatedDurationSeconds?: SortOrder
    createdAt?: SortOrder
    mission?: MissionOrderByWithRelationInput
  }

  export type MissionFlightPathWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    missionId?: string
    AND?: MissionFlightPathWhereInput | MissionFlightPathWhereInput[]
    OR?: MissionFlightPathWhereInput[]
    NOT?: MissionFlightPathWhereInput | MissionFlightPathWhereInput[]
    waypoints?: JsonFilter<"MissionFlightPath">
    waypointCount?: IntFilter<"MissionFlightPath"> | number
    estimatedDistanceMeters?: FloatFilter<"MissionFlightPath"> | number
    estimatedDurationSeconds?: IntFilter<"MissionFlightPath"> | number
    createdAt?: DateTimeFilter<"MissionFlightPath"> | Date | string
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
  }, "id" | "missionId">

  export type MissionFlightPathOrderByWithAggregationInput = {
    id?: SortOrder
    missionId?: SortOrder
    waypoints?: SortOrder
    waypointCount?: SortOrder
    estimatedDistanceMeters?: SortOrder
    estimatedDurationSeconds?: SortOrder
    createdAt?: SortOrder
    _count?: MissionFlightPathCountOrderByAggregateInput
    _avg?: MissionFlightPathAvgOrderByAggregateInput
    _max?: MissionFlightPathMaxOrderByAggregateInput
    _min?: MissionFlightPathMinOrderByAggregateInput
    _sum?: MissionFlightPathSumOrderByAggregateInput
  }

  export type MissionFlightPathScalarWhereWithAggregatesInput = {
    AND?: MissionFlightPathScalarWhereWithAggregatesInput | MissionFlightPathScalarWhereWithAggregatesInput[]
    OR?: MissionFlightPathScalarWhereWithAggregatesInput[]
    NOT?: MissionFlightPathScalarWhereWithAggregatesInput | MissionFlightPathScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MissionFlightPath"> | string
    missionId?: StringWithAggregatesFilter<"MissionFlightPath"> | string
    waypoints?: JsonWithAggregatesFilter<"MissionFlightPath">
    waypointCount?: IntWithAggregatesFilter<"MissionFlightPath"> | number
    estimatedDistanceMeters?: FloatWithAggregatesFilter<"MissionFlightPath"> | number
    estimatedDurationSeconds?: IntWithAggregatesFilter<"MissionFlightPath"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MissionFlightPath"> | Date | string
  }

  export type MissionTelemetryWhereInput = {
    AND?: MissionTelemetryWhereInput | MissionTelemetryWhereInput[]
    OR?: MissionTelemetryWhereInput[]
    NOT?: MissionTelemetryWhereInput | MissionTelemetryWhereInput[]
    id?: BigIntFilter<"MissionTelemetry"> | bigint | number
    missionId?: StringFilter<"MissionTelemetry"> | string
    latitude?: FloatFilter<"MissionTelemetry"> | number
    longitude?: FloatFilter<"MissionTelemetry"> | number
    altitude?: FloatNullableFilter<"MissionTelemetry"> | number | null
    heading?: FloatNullableFilter<"MissionTelemetry"> | number | null
    speed?: FloatNullableFilter<"MissionTelemetry"> | number | null
    phase?: StringNullableFilter<"MissionTelemetry"> | string | null
    progress?: IntFilter<"MissionTelemetry"> | number
    etaSeconds?: IntNullableFilter<"MissionTelemetry"> | number | null
    waypointIndex?: IntNullableFilter<"MissionTelemetry"> | number | null
    distanceTraveled?: FloatNullableFilter<"MissionTelemetry"> | number | null
    distanceRemaining?: FloatNullableFilter<"MissionTelemetry"> | number | null
    batteryLevel?: IntNullableFilter<"MissionTelemetry"> | number | null
    batteryVoltage?: FloatNullableFilter<"MissionTelemetry"> | number | null
    signalStrength?: IntNullableFilter<"MissionTelemetry"> | number | null
    motorTemp?: FloatNullableFilter<"MissionTelemetry"> | number | null
    airQualityIndex?: IntNullableFilter<"MissionTelemetry"> | number | null
    temperature?: FloatNullableFilter<"MissionTelemetry"> | number | null
    humidity?: FloatNullableFilter<"MissionTelemetry"> | number | null
    particulateMatter?: FloatNullableFilter<"MissionTelemetry"> | number | null
    recordedAt?: DateTimeFilter<"MissionTelemetry"> | Date | string
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
  }

  export type MissionTelemetryOrderByWithRelationInput = {
    id?: SortOrder
    missionId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrderInput | SortOrder
    heading?: SortOrderInput | SortOrder
    speed?: SortOrderInput | SortOrder
    phase?: SortOrderInput | SortOrder
    progress?: SortOrder
    etaSeconds?: SortOrderInput | SortOrder
    waypointIndex?: SortOrderInput | SortOrder
    distanceTraveled?: SortOrderInput | SortOrder
    distanceRemaining?: SortOrderInput | SortOrder
    batteryLevel?: SortOrderInput | SortOrder
    batteryVoltage?: SortOrderInput | SortOrder
    signalStrength?: SortOrderInput | SortOrder
    motorTemp?: SortOrderInput | SortOrder
    airQualityIndex?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    humidity?: SortOrderInput | SortOrder
    particulateMatter?: SortOrderInput | SortOrder
    recordedAt?: SortOrder
    mission?: MissionOrderByWithRelationInput
  }

  export type MissionTelemetryWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: MissionTelemetryWhereInput | MissionTelemetryWhereInput[]
    OR?: MissionTelemetryWhereInput[]
    NOT?: MissionTelemetryWhereInput | MissionTelemetryWhereInput[]
    missionId?: StringFilter<"MissionTelemetry"> | string
    latitude?: FloatFilter<"MissionTelemetry"> | number
    longitude?: FloatFilter<"MissionTelemetry"> | number
    altitude?: FloatNullableFilter<"MissionTelemetry"> | number | null
    heading?: FloatNullableFilter<"MissionTelemetry"> | number | null
    speed?: FloatNullableFilter<"MissionTelemetry"> | number | null
    phase?: StringNullableFilter<"MissionTelemetry"> | string | null
    progress?: IntFilter<"MissionTelemetry"> | number
    etaSeconds?: IntNullableFilter<"MissionTelemetry"> | number | null
    waypointIndex?: IntNullableFilter<"MissionTelemetry"> | number | null
    distanceTraveled?: FloatNullableFilter<"MissionTelemetry"> | number | null
    distanceRemaining?: FloatNullableFilter<"MissionTelemetry"> | number | null
    batteryLevel?: IntNullableFilter<"MissionTelemetry"> | number | null
    batteryVoltage?: FloatNullableFilter<"MissionTelemetry"> | number | null
    signalStrength?: IntNullableFilter<"MissionTelemetry"> | number | null
    motorTemp?: FloatNullableFilter<"MissionTelemetry"> | number | null
    airQualityIndex?: IntNullableFilter<"MissionTelemetry"> | number | null
    temperature?: FloatNullableFilter<"MissionTelemetry"> | number | null
    humidity?: FloatNullableFilter<"MissionTelemetry"> | number | null
    particulateMatter?: FloatNullableFilter<"MissionTelemetry"> | number | null
    recordedAt?: DateTimeFilter<"MissionTelemetry"> | Date | string
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
  }, "id">

  export type MissionTelemetryOrderByWithAggregationInput = {
    id?: SortOrder
    missionId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrderInput | SortOrder
    heading?: SortOrderInput | SortOrder
    speed?: SortOrderInput | SortOrder
    phase?: SortOrderInput | SortOrder
    progress?: SortOrder
    etaSeconds?: SortOrderInput | SortOrder
    waypointIndex?: SortOrderInput | SortOrder
    distanceTraveled?: SortOrderInput | SortOrder
    distanceRemaining?: SortOrderInput | SortOrder
    batteryLevel?: SortOrderInput | SortOrder
    batteryVoltage?: SortOrderInput | SortOrder
    signalStrength?: SortOrderInput | SortOrder
    motorTemp?: SortOrderInput | SortOrder
    airQualityIndex?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    humidity?: SortOrderInput | SortOrder
    particulateMatter?: SortOrderInput | SortOrder
    recordedAt?: SortOrder
    _count?: MissionTelemetryCountOrderByAggregateInput
    _avg?: MissionTelemetryAvgOrderByAggregateInput
    _max?: MissionTelemetryMaxOrderByAggregateInput
    _min?: MissionTelemetryMinOrderByAggregateInput
    _sum?: MissionTelemetrySumOrderByAggregateInput
  }

  export type MissionTelemetryScalarWhereWithAggregatesInput = {
    AND?: MissionTelemetryScalarWhereWithAggregatesInput | MissionTelemetryScalarWhereWithAggregatesInput[]
    OR?: MissionTelemetryScalarWhereWithAggregatesInput[]
    NOT?: MissionTelemetryScalarWhereWithAggregatesInput | MissionTelemetryScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"MissionTelemetry"> | bigint | number
    missionId?: StringWithAggregatesFilter<"MissionTelemetry"> | string
    latitude?: FloatWithAggregatesFilter<"MissionTelemetry"> | number
    longitude?: FloatWithAggregatesFilter<"MissionTelemetry"> | number
    altitude?: FloatNullableWithAggregatesFilter<"MissionTelemetry"> | number | null
    heading?: FloatNullableWithAggregatesFilter<"MissionTelemetry"> | number | null
    speed?: FloatNullableWithAggregatesFilter<"MissionTelemetry"> | number | null
    phase?: StringNullableWithAggregatesFilter<"MissionTelemetry"> | string | null
    progress?: IntWithAggregatesFilter<"MissionTelemetry"> | number
    etaSeconds?: IntNullableWithAggregatesFilter<"MissionTelemetry"> | number | null
    waypointIndex?: IntNullableWithAggregatesFilter<"MissionTelemetry"> | number | null
    distanceTraveled?: FloatNullableWithAggregatesFilter<"MissionTelemetry"> | number | null
    distanceRemaining?: FloatNullableWithAggregatesFilter<"MissionTelemetry"> | number | null
    batteryLevel?: IntNullableWithAggregatesFilter<"MissionTelemetry"> | number | null
    batteryVoltage?: FloatNullableWithAggregatesFilter<"MissionTelemetry"> | number | null
    signalStrength?: IntNullableWithAggregatesFilter<"MissionTelemetry"> | number | null
    motorTemp?: FloatNullableWithAggregatesFilter<"MissionTelemetry"> | number | null
    airQualityIndex?: IntNullableWithAggregatesFilter<"MissionTelemetry"> | number | null
    temperature?: FloatNullableWithAggregatesFilter<"MissionTelemetry"> | number | null
    humidity?: FloatNullableWithAggregatesFilter<"MissionTelemetry"> | number | null
    particulateMatter?: FloatNullableWithAggregatesFilter<"MissionTelemetry"> | number | null
    recordedAt?: DateTimeWithAggregatesFilter<"MissionTelemetry"> | Date | string
  }

  export type MissionEventWhereInput = {
    AND?: MissionEventWhereInput | MissionEventWhereInput[]
    OR?: MissionEventWhereInput[]
    NOT?: MissionEventWhereInput | MissionEventWhereInput[]
    id?: StringFilter<"MissionEvent"> | string
    missionId?: StringFilter<"MissionEvent"> | string
    eventType?: StringFilter<"MissionEvent"> | string
    payload?: JsonNullableFilter<"MissionEvent">
    createdAt?: DateTimeFilter<"MissionEvent"> | Date | string
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
  }

  export type MissionEventOrderByWithRelationInput = {
    id?: SortOrder
    missionId?: SortOrder
    eventType?: SortOrder
    payload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    mission?: MissionOrderByWithRelationInput
  }

  export type MissionEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MissionEventWhereInput | MissionEventWhereInput[]
    OR?: MissionEventWhereInput[]
    NOT?: MissionEventWhereInput | MissionEventWhereInput[]
    missionId?: StringFilter<"MissionEvent"> | string
    eventType?: StringFilter<"MissionEvent"> | string
    payload?: JsonNullableFilter<"MissionEvent">
    createdAt?: DateTimeFilter<"MissionEvent"> | Date | string
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
  }, "id">

  export type MissionEventOrderByWithAggregationInput = {
    id?: SortOrder
    missionId?: SortOrder
    eventType?: SortOrder
    payload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MissionEventCountOrderByAggregateInput
    _max?: MissionEventMaxOrderByAggregateInput
    _min?: MissionEventMinOrderByAggregateInput
  }

  export type MissionEventScalarWhereWithAggregatesInput = {
    AND?: MissionEventScalarWhereWithAggregatesInput | MissionEventScalarWhereWithAggregatesInput[]
    OR?: MissionEventScalarWhereWithAggregatesInput[]
    NOT?: MissionEventScalarWhereWithAggregatesInput | MissionEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MissionEvent"> | string
    missionId?: StringWithAggregatesFilter<"MissionEvent"> | string
    eventType?: StringWithAggregatesFilter<"MissionEvent"> | string
    payload?: JsonNullableWithAggregatesFilter<"MissionEvent">
    createdAt?: DateTimeWithAggregatesFilter<"MissionEvent"> | Date | string
  }

  export type MissionReportWhereInput = {
    AND?: MissionReportWhereInput | MissionReportWhereInput[]
    OR?: MissionReportWhereInput[]
    NOT?: MissionReportWhereInput | MissionReportWhereInput[]
    id?: StringFilter<"MissionReport"> | string
    missionId?: StringFilter<"MissionReport"> | string
    durationSeconds?: IntFilter<"MissionReport"> | number
    distanceMeters?: FloatFilter<"MissionReport"> | number
    coverageAreaSqm?: FloatFilter<"MissionReport"> | number
    createdAt?: DateTimeFilter<"MissionReport"> | Date | string
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
  }

  export type MissionReportOrderByWithRelationInput = {
    id?: SortOrder
    missionId?: SortOrder
    durationSeconds?: SortOrder
    distanceMeters?: SortOrder
    coverageAreaSqm?: SortOrder
    createdAt?: SortOrder
    mission?: MissionOrderByWithRelationInput
  }

  export type MissionReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    missionId?: string
    AND?: MissionReportWhereInput | MissionReportWhereInput[]
    OR?: MissionReportWhereInput[]
    NOT?: MissionReportWhereInput | MissionReportWhereInput[]
    durationSeconds?: IntFilter<"MissionReport"> | number
    distanceMeters?: FloatFilter<"MissionReport"> | number
    coverageAreaSqm?: FloatFilter<"MissionReport"> | number
    createdAt?: DateTimeFilter<"MissionReport"> | Date | string
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
  }, "id" | "missionId">

  export type MissionReportOrderByWithAggregationInput = {
    id?: SortOrder
    missionId?: SortOrder
    durationSeconds?: SortOrder
    distanceMeters?: SortOrder
    coverageAreaSqm?: SortOrder
    createdAt?: SortOrder
    _count?: MissionReportCountOrderByAggregateInput
    _avg?: MissionReportAvgOrderByAggregateInput
    _max?: MissionReportMaxOrderByAggregateInput
    _min?: MissionReportMinOrderByAggregateInput
    _sum?: MissionReportSumOrderByAggregateInput
  }

  export type MissionReportScalarWhereWithAggregatesInput = {
    AND?: MissionReportScalarWhereWithAggregatesInput | MissionReportScalarWhereWithAggregatesInput[]
    OR?: MissionReportScalarWhereWithAggregatesInput[]
    NOT?: MissionReportScalarWhereWithAggregatesInput | MissionReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MissionReport"> | string
    missionId?: StringWithAggregatesFilter<"MissionReport"> | string
    durationSeconds?: IntWithAggregatesFilter<"MissionReport"> | number
    distanceMeters?: FloatWithAggregatesFilter<"MissionReport"> | number
    coverageAreaSqm?: FloatWithAggregatesFilter<"MissionReport"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MissionReport"> | Date | string
  }

  export type OrganizationMetricsWhereInput = {
    AND?: OrganizationMetricsWhereInput | OrganizationMetricsWhereInput[]
    OR?: OrganizationMetricsWhereInput[]
    NOT?: OrganizationMetricsWhereInput | OrganizationMetricsWhereInput[]
    id?: StringFilter<"OrganizationMetrics"> | string
    totalMissions?: IntFilter<"OrganizationMetrics"> | number
    totalFlightTimeSeconds?: IntFilter<"OrganizationMetrics"> | number
    averageMissionDurationSeconds?: IntFilter<"OrganizationMetrics"> | number
    computedAt?: DateTimeFilter<"OrganizationMetrics"> | Date | string
  }

  export type OrganizationMetricsOrderByWithRelationInput = {
    id?: SortOrder
    totalMissions?: SortOrder
    totalFlightTimeSeconds?: SortOrder
    averageMissionDurationSeconds?: SortOrder
    computedAt?: SortOrder
  }

  export type OrganizationMetricsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrganizationMetricsWhereInput | OrganizationMetricsWhereInput[]
    OR?: OrganizationMetricsWhereInput[]
    NOT?: OrganizationMetricsWhereInput | OrganizationMetricsWhereInput[]
    totalMissions?: IntFilter<"OrganizationMetrics"> | number
    totalFlightTimeSeconds?: IntFilter<"OrganizationMetrics"> | number
    averageMissionDurationSeconds?: IntFilter<"OrganizationMetrics"> | number
    computedAt?: DateTimeFilter<"OrganizationMetrics"> | Date | string
  }, "id">

  export type OrganizationMetricsOrderByWithAggregationInput = {
    id?: SortOrder
    totalMissions?: SortOrder
    totalFlightTimeSeconds?: SortOrder
    averageMissionDurationSeconds?: SortOrder
    computedAt?: SortOrder
    _count?: OrganizationMetricsCountOrderByAggregateInput
    _avg?: OrganizationMetricsAvgOrderByAggregateInput
    _max?: OrganizationMetricsMaxOrderByAggregateInput
    _min?: OrganizationMetricsMinOrderByAggregateInput
    _sum?: OrganizationMetricsSumOrderByAggregateInput
  }

  export type OrganizationMetricsScalarWhereWithAggregatesInput = {
    AND?: OrganizationMetricsScalarWhereWithAggregatesInput | OrganizationMetricsScalarWhereWithAggregatesInput[]
    OR?: OrganizationMetricsScalarWhereWithAggregatesInput[]
    NOT?: OrganizationMetricsScalarWhereWithAggregatesInput | OrganizationMetricsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrganizationMetrics"> | string
    totalMissions?: IntWithAggregatesFilter<"OrganizationMetrics"> | number
    totalFlightTimeSeconds?: IntWithAggregatesFilter<"OrganizationMetrics"> | number
    averageMissionDurationSeconds?: IntWithAggregatesFilter<"OrganizationMetrics"> | number
    computedAt?: DateTimeWithAggregatesFilter<"OrganizationMetrics"> | Date | string
  }

  export type DroneCreateInput = {
    id?: string
    name: string
    batteryLevel?: number
    status?: $Enums.DroneStatus
    health?: string
    lastSeenAt?: Date | string | null
    homeBaseLat?: number
    homeBaseLng?: number
    maxRange?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    missions?: MissionCreateNestedManyWithoutAssignedDroneInput
  }

  export type DroneUncheckedCreateInput = {
    id?: string
    name: string
    batteryLevel?: number
    status?: $Enums.DroneStatus
    health?: string
    lastSeenAt?: Date | string | null
    homeBaseLat?: number
    homeBaseLng?: number
    maxRange?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    missions?: MissionUncheckedCreateNestedManyWithoutAssignedDroneInput
  }

  export type DroneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    batteryLevel?: IntFieldUpdateOperationsInput | number
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    health?: StringFieldUpdateOperationsInput | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    homeBaseLat?: FloatFieldUpdateOperationsInput | number
    homeBaseLng?: FloatFieldUpdateOperationsInput | number
    maxRange?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    missions?: MissionUpdateManyWithoutAssignedDroneNestedInput
  }

  export type DroneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    batteryLevel?: IntFieldUpdateOperationsInput | number
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    health?: StringFieldUpdateOperationsInput | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    homeBaseLat?: FloatFieldUpdateOperationsInput | number
    homeBaseLng?: FloatFieldUpdateOperationsInput | number
    maxRange?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    missions?: MissionUncheckedUpdateManyWithoutAssignedDroneNestedInput
  }

  export type DroneCreateManyInput = {
    id?: string
    name: string
    batteryLevel?: number
    status?: $Enums.DroneStatus
    health?: string
    lastSeenAt?: Date | string | null
    homeBaseLat?: number
    homeBaseLng?: number
    maxRange?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DroneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    batteryLevel?: IntFieldUpdateOperationsInput | number
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    health?: StringFieldUpdateOperationsInput | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    homeBaseLat?: FloatFieldUpdateOperationsInput | number
    homeBaseLng?: FloatFieldUpdateOperationsInput | number
    maxRange?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DroneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    batteryLevel?: IntFieldUpdateOperationsInput | number
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    health?: StringFieldUpdateOperationsInput | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    homeBaseLat?: FloatFieldUpdateOperationsInput | number
    homeBaseLng?: FloatFieldUpdateOperationsInput | number
    maxRange?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionCreateInput = {
    id?: string
    name: string
    status?: $Enums.MissionStatus
    pattern: $Enums.MissionPattern
    altitude: number
    overlapPercentage: number
    speed: number
    surveyArea: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    abortReason?: $Enums.AbortReason | null
    abortReasonText?: string | null
    phase?: string | null
    phaseStartedAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    pausedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedDrone?: DroneCreateNestedOneWithoutMissionsInput
    flightPath?: MissionFlightPathCreateNestedOneWithoutMissionInput
    telemetry?: MissionTelemetryCreateNestedManyWithoutMissionInput
    events?: MissionEventCreateNestedManyWithoutMissionInput
    report?: MissionReportCreateNestedOneWithoutMissionInput
  }

  export type MissionUncheckedCreateInput = {
    id?: string
    name: string
    status?: $Enums.MissionStatus
    pattern: $Enums.MissionPattern
    altitude: number
    overlapPercentage: number
    speed: number
    surveyArea: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    assignedDroneId?: string | null
    abortReason?: $Enums.AbortReason | null
    abortReasonText?: string | null
    phase?: string | null
    phaseStartedAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    pausedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flightPath?: MissionFlightPathUncheckedCreateNestedOneWithoutMissionInput
    telemetry?: MissionTelemetryUncheckedCreateNestedManyWithoutMissionInput
    events?: MissionEventUncheckedCreateNestedManyWithoutMissionInput
    report?: MissionReportUncheckedCreateNestedOneWithoutMissionInput
  }

  export type MissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    pattern?: EnumMissionPatternFieldUpdateOperationsInput | $Enums.MissionPattern
    altitude?: IntFieldUpdateOperationsInput | number
    overlapPercentage?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    surveyArea?: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    abortReason?: NullableEnumAbortReasonFieldUpdateOperationsInput | $Enums.AbortReason | null
    abortReasonText?: NullableStringFieldUpdateOperationsInput | string | null
    phase?: NullableStringFieldUpdateOperationsInput | string | null
    phaseStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pausedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedDrone?: DroneUpdateOneWithoutMissionsNestedInput
    flightPath?: MissionFlightPathUpdateOneWithoutMissionNestedInput
    telemetry?: MissionTelemetryUpdateManyWithoutMissionNestedInput
    events?: MissionEventUpdateManyWithoutMissionNestedInput
    report?: MissionReportUpdateOneWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    pattern?: EnumMissionPatternFieldUpdateOperationsInput | $Enums.MissionPattern
    altitude?: IntFieldUpdateOperationsInput | number
    overlapPercentage?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    surveyArea?: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    assignedDroneId?: NullableStringFieldUpdateOperationsInput | string | null
    abortReason?: NullableEnumAbortReasonFieldUpdateOperationsInput | $Enums.AbortReason | null
    abortReasonText?: NullableStringFieldUpdateOperationsInput | string | null
    phase?: NullableStringFieldUpdateOperationsInput | string | null
    phaseStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pausedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightPath?: MissionFlightPathUncheckedUpdateOneWithoutMissionNestedInput
    telemetry?: MissionTelemetryUncheckedUpdateManyWithoutMissionNestedInput
    events?: MissionEventUncheckedUpdateManyWithoutMissionNestedInput
    report?: MissionReportUncheckedUpdateOneWithoutMissionNestedInput
  }

  export type MissionCreateManyInput = {
    id?: string
    name: string
    status?: $Enums.MissionStatus
    pattern: $Enums.MissionPattern
    altitude: number
    overlapPercentage: number
    speed: number
    surveyArea: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    assignedDroneId?: string | null
    abortReason?: $Enums.AbortReason | null
    abortReasonText?: string | null
    phase?: string | null
    phaseStartedAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    pausedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    pattern?: EnumMissionPatternFieldUpdateOperationsInput | $Enums.MissionPattern
    altitude?: IntFieldUpdateOperationsInput | number
    overlapPercentage?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    surveyArea?: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    abortReason?: NullableEnumAbortReasonFieldUpdateOperationsInput | $Enums.AbortReason | null
    abortReasonText?: NullableStringFieldUpdateOperationsInput | string | null
    phase?: NullableStringFieldUpdateOperationsInput | string | null
    phaseStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pausedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    pattern?: EnumMissionPatternFieldUpdateOperationsInput | $Enums.MissionPattern
    altitude?: IntFieldUpdateOperationsInput | number
    overlapPercentage?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    surveyArea?: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    assignedDroneId?: NullableStringFieldUpdateOperationsInput | string | null
    abortReason?: NullableEnumAbortReasonFieldUpdateOperationsInput | $Enums.AbortReason | null
    abortReasonText?: NullableStringFieldUpdateOperationsInput | string | null
    phase?: NullableStringFieldUpdateOperationsInput | string | null
    phaseStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pausedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionFlightPathCreateInput = {
    id?: string
    waypoints: JsonNullValueInput | InputJsonValue
    waypointCount: number
    estimatedDistanceMeters: number
    estimatedDurationSeconds: number
    createdAt?: Date | string
    mission: MissionCreateNestedOneWithoutFlightPathInput
  }

  export type MissionFlightPathUncheckedCreateInput = {
    id?: string
    missionId: string
    waypoints: JsonNullValueInput | InputJsonValue
    waypointCount: number
    estimatedDistanceMeters: number
    estimatedDurationSeconds: number
    createdAt?: Date | string
  }

  export type MissionFlightPathUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    waypoints?: JsonNullValueInput | InputJsonValue
    waypointCount?: IntFieldUpdateOperationsInput | number
    estimatedDistanceMeters?: FloatFieldUpdateOperationsInput | number
    estimatedDurationSeconds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mission?: MissionUpdateOneRequiredWithoutFlightPathNestedInput
  }

  export type MissionFlightPathUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    missionId?: StringFieldUpdateOperationsInput | string
    waypoints?: JsonNullValueInput | InputJsonValue
    waypointCount?: IntFieldUpdateOperationsInput | number
    estimatedDistanceMeters?: FloatFieldUpdateOperationsInput | number
    estimatedDurationSeconds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionFlightPathCreateManyInput = {
    id?: string
    missionId: string
    waypoints: JsonNullValueInput | InputJsonValue
    waypointCount: number
    estimatedDistanceMeters: number
    estimatedDurationSeconds: number
    createdAt?: Date | string
  }

  export type MissionFlightPathUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    waypoints?: JsonNullValueInput | InputJsonValue
    waypointCount?: IntFieldUpdateOperationsInput | number
    estimatedDistanceMeters?: FloatFieldUpdateOperationsInput | number
    estimatedDurationSeconds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionFlightPathUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    missionId?: StringFieldUpdateOperationsInput | string
    waypoints?: JsonNullValueInput | InputJsonValue
    waypointCount?: IntFieldUpdateOperationsInput | number
    estimatedDistanceMeters?: FloatFieldUpdateOperationsInput | number
    estimatedDurationSeconds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionTelemetryCreateInput = {
    id?: bigint | number
    latitude: number
    longitude: number
    altitude?: number | null
    heading?: number | null
    speed?: number | null
    phase?: string | null
    progress: number
    etaSeconds?: number | null
    waypointIndex?: number | null
    distanceTraveled?: number | null
    distanceRemaining?: number | null
    batteryLevel?: number | null
    batteryVoltage?: number | null
    signalStrength?: number | null
    motorTemp?: number | null
    airQualityIndex?: number | null
    temperature?: number | null
    humidity?: number | null
    particulateMatter?: number | null
    recordedAt?: Date | string
    mission: MissionCreateNestedOneWithoutTelemetryInput
  }

  export type MissionTelemetryUncheckedCreateInput = {
    id?: bigint | number
    missionId: string
    latitude: number
    longitude: number
    altitude?: number | null
    heading?: number | null
    speed?: number | null
    phase?: string | null
    progress: number
    etaSeconds?: number | null
    waypointIndex?: number | null
    distanceTraveled?: number | null
    distanceRemaining?: number | null
    batteryLevel?: number | null
    batteryVoltage?: number | null
    signalStrength?: number | null
    motorTemp?: number | null
    airQualityIndex?: number | null
    temperature?: number | null
    humidity?: number | null
    particulateMatter?: number | null
    recordedAt?: Date | string
  }

  export type MissionTelemetryUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    heading?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    phase?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: IntFieldUpdateOperationsInput | number
    etaSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    waypointIndex?: NullableIntFieldUpdateOperationsInput | number | null
    distanceTraveled?: NullableFloatFieldUpdateOperationsInput | number | null
    distanceRemaining?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryLevel?: NullableIntFieldUpdateOperationsInput | number | null
    batteryVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    signalStrength?: NullableIntFieldUpdateOperationsInput | number | null
    motorTemp?: NullableFloatFieldUpdateOperationsInput | number | null
    airQualityIndex?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    particulateMatter?: NullableFloatFieldUpdateOperationsInput | number | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mission?: MissionUpdateOneRequiredWithoutTelemetryNestedInput
  }

  export type MissionTelemetryUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    missionId?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    heading?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    phase?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: IntFieldUpdateOperationsInput | number
    etaSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    waypointIndex?: NullableIntFieldUpdateOperationsInput | number | null
    distanceTraveled?: NullableFloatFieldUpdateOperationsInput | number | null
    distanceRemaining?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryLevel?: NullableIntFieldUpdateOperationsInput | number | null
    batteryVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    signalStrength?: NullableIntFieldUpdateOperationsInput | number | null
    motorTemp?: NullableFloatFieldUpdateOperationsInput | number | null
    airQualityIndex?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    particulateMatter?: NullableFloatFieldUpdateOperationsInput | number | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionTelemetryCreateManyInput = {
    id?: bigint | number
    missionId: string
    latitude: number
    longitude: number
    altitude?: number | null
    heading?: number | null
    speed?: number | null
    phase?: string | null
    progress: number
    etaSeconds?: number | null
    waypointIndex?: number | null
    distanceTraveled?: number | null
    distanceRemaining?: number | null
    batteryLevel?: number | null
    batteryVoltage?: number | null
    signalStrength?: number | null
    motorTemp?: number | null
    airQualityIndex?: number | null
    temperature?: number | null
    humidity?: number | null
    particulateMatter?: number | null
    recordedAt?: Date | string
  }

  export type MissionTelemetryUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    heading?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    phase?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: IntFieldUpdateOperationsInput | number
    etaSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    waypointIndex?: NullableIntFieldUpdateOperationsInput | number | null
    distanceTraveled?: NullableFloatFieldUpdateOperationsInput | number | null
    distanceRemaining?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryLevel?: NullableIntFieldUpdateOperationsInput | number | null
    batteryVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    signalStrength?: NullableIntFieldUpdateOperationsInput | number | null
    motorTemp?: NullableFloatFieldUpdateOperationsInput | number | null
    airQualityIndex?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    particulateMatter?: NullableFloatFieldUpdateOperationsInput | number | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionTelemetryUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    missionId?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    heading?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    phase?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: IntFieldUpdateOperationsInput | number
    etaSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    waypointIndex?: NullableIntFieldUpdateOperationsInput | number | null
    distanceTraveled?: NullableFloatFieldUpdateOperationsInput | number | null
    distanceRemaining?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryLevel?: NullableIntFieldUpdateOperationsInput | number | null
    batteryVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    signalStrength?: NullableIntFieldUpdateOperationsInput | number | null
    motorTemp?: NullableFloatFieldUpdateOperationsInput | number | null
    airQualityIndex?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    particulateMatter?: NullableFloatFieldUpdateOperationsInput | number | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionEventCreateInput = {
    id?: string
    eventType: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    mission: MissionCreateNestedOneWithoutEventsInput
  }

  export type MissionEventUncheckedCreateInput = {
    id?: string
    missionId: string
    eventType: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MissionEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mission?: MissionUpdateOneRequiredWithoutEventsNestedInput
  }

  export type MissionEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    missionId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionEventCreateManyInput = {
    id?: string
    missionId: string
    eventType: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MissionEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    missionId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionReportCreateInput = {
    id?: string
    durationSeconds: number
    distanceMeters: number
    coverageAreaSqm: number
    createdAt?: Date | string
    mission: MissionCreateNestedOneWithoutReportInput
  }

  export type MissionReportUncheckedCreateInput = {
    id?: string
    missionId: string
    durationSeconds: number
    distanceMeters: number
    coverageAreaSqm: number
    createdAt?: Date | string
  }

  export type MissionReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    durationSeconds?: IntFieldUpdateOperationsInput | number
    distanceMeters?: FloatFieldUpdateOperationsInput | number
    coverageAreaSqm?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mission?: MissionUpdateOneRequiredWithoutReportNestedInput
  }

  export type MissionReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    missionId?: StringFieldUpdateOperationsInput | string
    durationSeconds?: IntFieldUpdateOperationsInput | number
    distanceMeters?: FloatFieldUpdateOperationsInput | number
    coverageAreaSqm?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionReportCreateManyInput = {
    id?: string
    missionId: string
    durationSeconds: number
    distanceMeters: number
    coverageAreaSqm: number
    createdAt?: Date | string
  }

  export type MissionReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    durationSeconds?: IntFieldUpdateOperationsInput | number
    distanceMeters?: FloatFieldUpdateOperationsInput | number
    coverageAreaSqm?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    missionId?: StringFieldUpdateOperationsInput | string
    durationSeconds?: IntFieldUpdateOperationsInput | number
    distanceMeters?: FloatFieldUpdateOperationsInput | number
    coverageAreaSqm?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMetricsCreateInput = {
    id?: string
    totalMissions?: number
    totalFlightTimeSeconds?: number
    averageMissionDurationSeconds?: number
    computedAt?: Date | string
  }

  export type OrganizationMetricsUncheckedCreateInput = {
    id?: string
    totalMissions?: number
    totalFlightTimeSeconds?: number
    averageMissionDurationSeconds?: number
    computedAt?: Date | string
  }

  export type OrganizationMetricsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalMissions?: IntFieldUpdateOperationsInput | number
    totalFlightTimeSeconds?: IntFieldUpdateOperationsInput | number
    averageMissionDurationSeconds?: IntFieldUpdateOperationsInput | number
    computedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMetricsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalMissions?: IntFieldUpdateOperationsInput | number
    totalFlightTimeSeconds?: IntFieldUpdateOperationsInput | number
    averageMissionDurationSeconds?: IntFieldUpdateOperationsInput | number
    computedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMetricsCreateManyInput = {
    id?: string
    totalMissions?: number
    totalFlightTimeSeconds?: number
    averageMissionDurationSeconds?: number
    computedAt?: Date | string
  }

  export type OrganizationMetricsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalMissions?: IntFieldUpdateOperationsInput | number
    totalFlightTimeSeconds?: IntFieldUpdateOperationsInput | number
    averageMissionDurationSeconds?: IntFieldUpdateOperationsInput | number
    computedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMetricsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalMissions?: IntFieldUpdateOperationsInput | number
    totalFlightTimeSeconds?: IntFieldUpdateOperationsInput | number
    averageMissionDurationSeconds?: IntFieldUpdateOperationsInput | number
    computedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumDroneStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DroneStatus | EnumDroneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DroneStatus[] | ListEnumDroneStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DroneStatus[] | ListEnumDroneStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDroneStatusFilter<$PrismaModel> | $Enums.DroneStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MissionListRelationFilter = {
    every?: MissionWhereInput
    some?: MissionWhereInput
    none?: MissionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DroneCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    batteryLevel?: SortOrder
    status?: SortOrder
    health?: SortOrder
    lastSeenAt?: SortOrder
    homeBaseLat?: SortOrder
    homeBaseLng?: SortOrder
    maxRange?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DroneAvgOrderByAggregateInput = {
    batteryLevel?: SortOrder
    homeBaseLat?: SortOrder
    homeBaseLng?: SortOrder
    maxRange?: SortOrder
  }

  export type DroneMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    batteryLevel?: SortOrder
    status?: SortOrder
    health?: SortOrder
    lastSeenAt?: SortOrder
    homeBaseLat?: SortOrder
    homeBaseLng?: SortOrder
    maxRange?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DroneMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    batteryLevel?: SortOrder
    status?: SortOrder
    health?: SortOrder
    lastSeenAt?: SortOrder
    homeBaseLat?: SortOrder
    homeBaseLng?: SortOrder
    maxRange?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DroneSumOrderByAggregateInput = {
    batteryLevel?: SortOrder
    homeBaseLat?: SortOrder
    homeBaseLng?: SortOrder
    maxRange?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumDroneStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DroneStatus | EnumDroneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DroneStatus[] | ListEnumDroneStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DroneStatus[] | ListEnumDroneStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDroneStatusWithAggregatesFilter<$PrismaModel> | $Enums.DroneStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDroneStatusFilter<$PrismaModel>
    _max?: NestedEnumDroneStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumMissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionStatus | EnumMissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MissionStatus[] | ListEnumMissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MissionStatus[] | ListEnumMissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMissionStatusFilter<$PrismaModel> | $Enums.MissionStatus
  }

  export type EnumMissionPatternFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionPattern | EnumMissionPatternFieldRefInput<$PrismaModel>
    in?: $Enums.MissionPattern[] | ListEnumMissionPatternFieldRefInput<$PrismaModel>
    notIn?: $Enums.MissionPattern[] | ListEnumMissionPatternFieldRefInput<$PrismaModel>
    not?: NestedEnumMissionPatternFilter<$PrismaModel> | $Enums.MissionPattern
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumAbortReasonNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AbortReason | EnumAbortReasonFieldRefInput<$PrismaModel> | null
    in?: $Enums.AbortReason[] | ListEnumAbortReasonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AbortReason[] | ListEnumAbortReasonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAbortReasonNullableFilter<$PrismaModel> | $Enums.AbortReason | null
  }

  export type DroneNullableScalarRelationFilter = {
    is?: DroneWhereInput | null
    isNot?: DroneWhereInput | null
  }

  export type MissionFlightPathNullableScalarRelationFilter = {
    is?: MissionFlightPathWhereInput | null
    isNot?: MissionFlightPathWhereInput | null
  }

  export type MissionTelemetryListRelationFilter = {
    every?: MissionTelemetryWhereInput
    some?: MissionTelemetryWhereInput
    none?: MissionTelemetryWhereInput
  }

  export type MissionEventListRelationFilter = {
    every?: MissionEventWhereInput
    some?: MissionEventWhereInput
    none?: MissionEventWhereInput
  }

  export type MissionReportNullableScalarRelationFilter = {
    is?: MissionReportWhereInput | null
    isNot?: MissionReportWhereInput | null
  }

  export type MissionTelemetryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MissionEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    pattern?: SortOrder
    altitude?: SortOrder
    overlapPercentage?: SortOrder
    speed?: SortOrder
    surveyArea?: SortOrder
    patternConfig?: SortOrder
    assignedDroneId?: SortOrder
    abortReason?: SortOrder
    abortReasonText?: SortOrder
    phase?: SortOrder
    phaseStartedAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    pausedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MissionAvgOrderByAggregateInput = {
    altitude?: SortOrder
    overlapPercentage?: SortOrder
    speed?: SortOrder
  }

  export type MissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    pattern?: SortOrder
    altitude?: SortOrder
    overlapPercentage?: SortOrder
    speed?: SortOrder
    assignedDroneId?: SortOrder
    abortReason?: SortOrder
    abortReasonText?: SortOrder
    phase?: SortOrder
    phaseStartedAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    pausedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    pattern?: SortOrder
    altitude?: SortOrder
    overlapPercentage?: SortOrder
    speed?: SortOrder
    assignedDroneId?: SortOrder
    abortReason?: SortOrder
    abortReasonText?: SortOrder
    phase?: SortOrder
    phaseStartedAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    pausedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MissionSumOrderByAggregateInput = {
    altitude?: SortOrder
    overlapPercentage?: SortOrder
    speed?: SortOrder
  }

  export type EnumMissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionStatus | EnumMissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MissionStatus[] | ListEnumMissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MissionStatus[] | ListEnumMissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.MissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMissionStatusFilter<$PrismaModel>
    _max?: NestedEnumMissionStatusFilter<$PrismaModel>
  }

  export type EnumMissionPatternWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionPattern | EnumMissionPatternFieldRefInput<$PrismaModel>
    in?: $Enums.MissionPattern[] | ListEnumMissionPatternFieldRefInput<$PrismaModel>
    notIn?: $Enums.MissionPattern[] | ListEnumMissionPatternFieldRefInput<$PrismaModel>
    not?: NestedEnumMissionPatternWithAggregatesFilter<$PrismaModel> | $Enums.MissionPattern
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMissionPatternFilter<$PrismaModel>
    _max?: NestedEnumMissionPatternFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumAbortReasonNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AbortReason | EnumAbortReasonFieldRefInput<$PrismaModel> | null
    in?: $Enums.AbortReason[] | ListEnumAbortReasonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AbortReason[] | ListEnumAbortReasonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAbortReasonNullableWithAggregatesFilter<$PrismaModel> | $Enums.AbortReason | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAbortReasonNullableFilter<$PrismaModel>
    _max?: NestedEnumAbortReasonNullableFilter<$PrismaModel>
  }

  export type MissionScalarRelationFilter = {
    is?: MissionWhereInput
    isNot?: MissionWhereInput
  }

  export type MissionFlightPathCountOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    waypoints?: SortOrder
    waypointCount?: SortOrder
    estimatedDistanceMeters?: SortOrder
    estimatedDurationSeconds?: SortOrder
    createdAt?: SortOrder
  }

  export type MissionFlightPathAvgOrderByAggregateInput = {
    waypointCount?: SortOrder
    estimatedDistanceMeters?: SortOrder
    estimatedDurationSeconds?: SortOrder
  }

  export type MissionFlightPathMaxOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    waypointCount?: SortOrder
    estimatedDistanceMeters?: SortOrder
    estimatedDurationSeconds?: SortOrder
    createdAt?: SortOrder
  }

  export type MissionFlightPathMinOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    waypointCount?: SortOrder
    estimatedDistanceMeters?: SortOrder
    estimatedDurationSeconds?: SortOrder
    createdAt?: SortOrder
  }

  export type MissionFlightPathSumOrderByAggregateInput = {
    waypointCount?: SortOrder
    estimatedDistanceMeters?: SortOrder
    estimatedDurationSeconds?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MissionTelemetryCountOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    heading?: SortOrder
    speed?: SortOrder
    phase?: SortOrder
    progress?: SortOrder
    etaSeconds?: SortOrder
    waypointIndex?: SortOrder
    distanceTraveled?: SortOrder
    distanceRemaining?: SortOrder
    batteryLevel?: SortOrder
    batteryVoltage?: SortOrder
    signalStrength?: SortOrder
    motorTemp?: SortOrder
    airQualityIndex?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    particulateMatter?: SortOrder
    recordedAt?: SortOrder
  }

  export type MissionTelemetryAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    heading?: SortOrder
    speed?: SortOrder
    progress?: SortOrder
    etaSeconds?: SortOrder
    waypointIndex?: SortOrder
    distanceTraveled?: SortOrder
    distanceRemaining?: SortOrder
    batteryLevel?: SortOrder
    batteryVoltage?: SortOrder
    signalStrength?: SortOrder
    motorTemp?: SortOrder
    airQualityIndex?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    particulateMatter?: SortOrder
  }

  export type MissionTelemetryMaxOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    heading?: SortOrder
    speed?: SortOrder
    phase?: SortOrder
    progress?: SortOrder
    etaSeconds?: SortOrder
    waypointIndex?: SortOrder
    distanceTraveled?: SortOrder
    distanceRemaining?: SortOrder
    batteryLevel?: SortOrder
    batteryVoltage?: SortOrder
    signalStrength?: SortOrder
    motorTemp?: SortOrder
    airQualityIndex?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    particulateMatter?: SortOrder
    recordedAt?: SortOrder
  }

  export type MissionTelemetryMinOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    heading?: SortOrder
    speed?: SortOrder
    phase?: SortOrder
    progress?: SortOrder
    etaSeconds?: SortOrder
    waypointIndex?: SortOrder
    distanceTraveled?: SortOrder
    distanceRemaining?: SortOrder
    batteryLevel?: SortOrder
    batteryVoltage?: SortOrder
    signalStrength?: SortOrder
    motorTemp?: SortOrder
    airQualityIndex?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    particulateMatter?: SortOrder
    recordedAt?: SortOrder
  }

  export type MissionTelemetrySumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    heading?: SortOrder
    speed?: SortOrder
    progress?: SortOrder
    etaSeconds?: SortOrder
    waypointIndex?: SortOrder
    distanceTraveled?: SortOrder
    distanceRemaining?: SortOrder
    batteryLevel?: SortOrder
    batteryVoltage?: SortOrder
    signalStrength?: SortOrder
    motorTemp?: SortOrder
    airQualityIndex?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    particulateMatter?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type MissionEventCountOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    eventType?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
  }

  export type MissionEventMaxOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
  }

  export type MissionEventMinOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
  }

  export type MissionReportCountOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    durationSeconds?: SortOrder
    distanceMeters?: SortOrder
    coverageAreaSqm?: SortOrder
    createdAt?: SortOrder
  }

  export type MissionReportAvgOrderByAggregateInput = {
    durationSeconds?: SortOrder
    distanceMeters?: SortOrder
    coverageAreaSqm?: SortOrder
  }

  export type MissionReportMaxOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    durationSeconds?: SortOrder
    distanceMeters?: SortOrder
    coverageAreaSqm?: SortOrder
    createdAt?: SortOrder
  }

  export type MissionReportMinOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    durationSeconds?: SortOrder
    distanceMeters?: SortOrder
    coverageAreaSqm?: SortOrder
    createdAt?: SortOrder
  }

  export type MissionReportSumOrderByAggregateInput = {
    durationSeconds?: SortOrder
    distanceMeters?: SortOrder
    coverageAreaSqm?: SortOrder
  }

  export type OrganizationMetricsCountOrderByAggregateInput = {
    id?: SortOrder
    totalMissions?: SortOrder
    totalFlightTimeSeconds?: SortOrder
    averageMissionDurationSeconds?: SortOrder
    computedAt?: SortOrder
  }

  export type OrganizationMetricsAvgOrderByAggregateInput = {
    totalMissions?: SortOrder
    totalFlightTimeSeconds?: SortOrder
    averageMissionDurationSeconds?: SortOrder
  }

  export type OrganizationMetricsMaxOrderByAggregateInput = {
    id?: SortOrder
    totalMissions?: SortOrder
    totalFlightTimeSeconds?: SortOrder
    averageMissionDurationSeconds?: SortOrder
    computedAt?: SortOrder
  }

  export type OrganizationMetricsMinOrderByAggregateInput = {
    id?: SortOrder
    totalMissions?: SortOrder
    totalFlightTimeSeconds?: SortOrder
    averageMissionDurationSeconds?: SortOrder
    computedAt?: SortOrder
  }

  export type OrganizationMetricsSumOrderByAggregateInput = {
    totalMissions?: SortOrder
    totalFlightTimeSeconds?: SortOrder
    averageMissionDurationSeconds?: SortOrder
  }

  export type MissionCreateNestedManyWithoutAssignedDroneInput = {
    create?: XOR<MissionCreateWithoutAssignedDroneInput, MissionUncheckedCreateWithoutAssignedDroneInput> | MissionCreateWithoutAssignedDroneInput[] | MissionUncheckedCreateWithoutAssignedDroneInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutAssignedDroneInput | MissionCreateOrConnectWithoutAssignedDroneInput[]
    createMany?: MissionCreateManyAssignedDroneInputEnvelope
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
  }

  export type MissionUncheckedCreateNestedManyWithoutAssignedDroneInput = {
    create?: XOR<MissionCreateWithoutAssignedDroneInput, MissionUncheckedCreateWithoutAssignedDroneInput> | MissionCreateWithoutAssignedDroneInput[] | MissionUncheckedCreateWithoutAssignedDroneInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutAssignedDroneInput | MissionCreateOrConnectWithoutAssignedDroneInput[]
    createMany?: MissionCreateManyAssignedDroneInputEnvelope
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumDroneStatusFieldUpdateOperationsInput = {
    set?: $Enums.DroneStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MissionUpdateManyWithoutAssignedDroneNestedInput = {
    create?: XOR<MissionCreateWithoutAssignedDroneInput, MissionUncheckedCreateWithoutAssignedDroneInput> | MissionCreateWithoutAssignedDroneInput[] | MissionUncheckedCreateWithoutAssignedDroneInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutAssignedDroneInput | MissionCreateOrConnectWithoutAssignedDroneInput[]
    upsert?: MissionUpsertWithWhereUniqueWithoutAssignedDroneInput | MissionUpsertWithWhereUniqueWithoutAssignedDroneInput[]
    createMany?: MissionCreateManyAssignedDroneInputEnvelope
    set?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    disconnect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    delete?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    update?: MissionUpdateWithWhereUniqueWithoutAssignedDroneInput | MissionUpdateWithWhereUniqueWithoutAssignedDroneInput[]
    updateMany?: MissionUpdateManyWithWhereWithoutAssignedDroneInput | MissionUpdateManyWithWhereWithoutAssignedDroneInput[]
    deleteMany?: MissionScalarWhereInput | MissionScalarWhereInput[]
  }

  export type MissionUncheckedUpdateManyWithoutAssignedDroneNestedInput = {
    create?: XOR<MissionCreateWithoutAssignedDroneInput, MissionUncheckedCreateWithoutAssignedDroneInput> | MissionCreateWithoutAssignedDroneInput[] | MissionUncheckedCreateWithoutAssignedDroneInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutAssignedDroneInput | MissionCreateOrConnectWithoutAssignedDroneInput[]
    upsert?: MissionUpsertWithWhereUniqueWithoutAssignedDroneInput | MissionUpsertWithWhereUniqueWithoutAssignedDroneInput[]
    createMany?: MissionCreateManyAssignedDroneInputEnvelope
    set?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    disconnect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    delete?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    update?: MissionUpdateWithWhereUniqueWithoutAssignedDroneInput | MissionUpdateWithWhereUniqueWithoutAssignedDroneInput[]
    updateMany?: MissionUpdateManyWithWhereWithoutAssignedDroneInput | MissionUpdateManyWithWhereWithoutAssignedDroneInput[]
    deleteMany?: MissionScalarWhereInput | MissionScalarWhereInput[]
  }

  export type DroneCreateNestedOneWithoutMissionsInput = {
    create?: XOR<DroneCreateWithoutMissionsInput, DroneUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: DroneCreateOrConnectWithoutMissionsInput
    connect?: DroneWhereUniqueInput
  }

  export type MissionFlightPathCreateNestedOneWithoutMissionInput = {
    create?: XOR<MissionFlightPathCreateWithoutMissionInput, MissionFlightPathUncheckedCreateWithoutMissionInput>
    connectOrCreate?: MissionFlightPathCreateOrConnectWithoutMissionInput
    connect?: MissionFlightPathWhereUniqueInput
  }

  export type MissionTelemetryCreateNestedManyWithoutMissionInput = {
    create?: XOR<MissionTelemetryCreateWithoutMissionInput, MissionTelemetryUncheckedCreateWithoutMissionInput> | MissionTelemetryCreateWithoutMissionInput[] | MissionTelemetryUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionTelemetryCreateOrConnectWithoutMissionInput | MissionTelemetryCreateOrConnectWithoutMissionInput[]
    createMany?: MissionTelemetryCreateManyMissionInputEnvelope
    connect?: MissionTelemetryWhereUniqueInput | MissionTelemetryWhereUniqueInput[]
  }

  export type MissionEventCreateNestedManyWithoutMissionInput = {
    create?: XOR<MissionEventCreateWithoutMissionInput, MissionEventUncheckedCreateWithoutMissionInput> | MissionEventCreateWithoutMissionInput[] | MissionEventUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionEventCreateOrConnectWithoutMissionInput | MissionEventCreateOrConnectWithoutMissionInput[]
    createMany?: MissionEventCreateManyMissionInputEnvelope
    connect?: MissionEventWhereUniqueInput | MissionEventWhereUniqueInput[]
  }

  export type MissionReportCreateNestedOneWithoutMissionInput = {
    create?: XOR<MissionReportCreateWithoutMissionInput, MissionReportUncheckedCreateWithoutMissionInput>
    connectOrCreate?: MissionReportCreateOrConnectWithoutMissionInput
    connect?: MissionReportWhereUniqueInput
  }

  export type MissionFlightPathUncheckedCreateNestedOneWithoutMissionInput = {
    create?: XOR<MissionFlightPathCreateWithoutMissionInput, MissionFlightPathUncheckedCreateWithoutMissionInput>
    connectOrCreate?: MissionFlightPathCreateOrConnectWithoutMissionInput
    connect?: MissionFlightPathWhereUniqueInput
  }

  export type MissionTelemetryUncheckedCreateNestedManyWithoutMissionInput = {
    create?: XOR<MissionTelemetryCreateWithoutMissionInput, MissionTelemetryUncheckedCreateWithoutMissionInput> | MissionTelemetryCreateWithoutMissionInput[] | MissionTelemetryUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionTelemetryCreateOrConnectWithoutMissionInput | MissionTelemetryCreateOrConnectWithoutMissionInput[]
    createMany?: MissionTelemetryCreateManyMissionInputEnvelope
    connect?: MissionTelemetryWhereUniqueInput | MissionTelemetryWhereUniqueInput[]
  }

  export type MissionEventUncheckedCreateNestedManyWithoutMissionInput = {
    create?: XOR<MissionEventCreateWithoutMissionInput, MissionEventUncheckedCreateWithoutMissionInput> | MissionEventCreateWithoutMissionInput[] | MissionEventUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionEventCreateOrConnectWithoutMissionInput | MissionEventCreateOrConnectWithoutMissionInput[]
    createMany?: MissionEventCreateManyMissionInputEnvelope
    connect?: MissionEventWhereUniqueInput | MissionEventWhereUniqueInput[]
  }

  export type MissionReportUncheckedCreateNestedOneWithoutMissionInput = {
    create?: XOR<MissionReportCreateWithoutMissionInput, MissionReportUncheckedCreateWithoutMissionInput>
    connectOrCreate?: MissionReportCreateOrConnectWithoutMissionInput
    connect?: MissionReportWhereUniqueInput
  }

  export type EnumMissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.MissionStatus
  }

  export type EnumMissionPatternFieldUpdateOperationsInput = {
    set?: $Enums.MissionPattern
  }

  export type NullableEnumAbortReasonFieldUpdateOperationsInput = {
    set?: $Enums.AbortReason | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DroneUpdateOneWithoutMissionsNestedInput = {
    create?: XOR<DroneCreateWithoutMissionsInput, DroneUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: DroneCreateOrConnectWithoutMissionsInput
    upsert?: DroneUpsertWithoutMissionsInput
    disconnect?: DroneWhereInput | boolean
    delete?: DroneWhereInput | boolean
    connect?: DroneWhereUniqueInput
    update?: XOR<XOR<DroneUpdateToOneWithWhereWithoutMissionsInput, DroneUpdateWithoutMissionsInput>, DroneUncheckedUpdateWithoutMissionsInput>
  }

  export type MissionFlightPathUpdateOneWithoutMissionNestedInput = {
    create?: XOR<MissionFlightPathCreateWithoutMissionInput, MissionFlightPathUncheckedCreateWithoutMissionInput>
    connectOrCreate?: MissionFlightPathCreateOrConnectWithoutMissionInput
    upsert?: MissionFlightPathUpsertWithoutMissionInput
    disconnect?: MissionFlightPathWhereInput | boolean
    delete?: MissionFlightPathWhereInput | boolean
    connect?: MissionFlightPathWhereUniqueInput
    update?: XOR<XOR<MissionFlightPathUpdateToOneWithWhereWithoutMissionInput, MissionFlightPathUpdateWithoutMissionInput>, MissionFlightPathUncheckedUpdateWithoutMissionInput>
  }

  export type MissionTelemetryUpdateManyWithoutMissionNestedInput = {
    create?: XOR<MissionTelemetryCreateWithoutMissionInput, MissionTelemetryUncheckedCreateWithoutMissionInput> | MissionTelemetryCreateWithoutMissionInput[] | MissionTelemetryUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionTelemetryCreateOrConnectWithoutMissionInput | MissionTelemetryCreateOrConnectWithoutMissionInput[]
    upsert?: MissionTelemetryUpsertWithWhereUniqueWithoutMissionInput | MissionTelemetryUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: MissionTelemetryCreateManyMissionInputEnvelope
    set?: MissionTelemetryWhereUniqueInput | MissionTelemetryWhereUniqueInput[]
    disconnect?: MissionTelemetryWhereUniqueInput | MissionTelemetryWhereUniqueInput[]
    delete?: MissionTelemetryWhereUniqueInput | MissionTelemetryWhereUniqueInput[]
    connect?: MissionTelemetryWhereUniqueInput | MissionTelemetryWhereUniqueInput[]
    update?: MissionTelemetryUpdateWithWhereUniqueWithoutMissionInput | MissionTelemetryUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?: MissionTelemetryUpdateManyWithWhereWithoutMissionInput | MissionTelemetryUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?: MissionTelemetryScalarWhereInput | MissionTelemetryScalarWhereInput[]
  }

  export type MissionEventUpdateManyWithoutMissionNestedInput = {
    create?: XOR<MissionEventCreateWithoutMissionInput, MissionEventUncheckedCreateWithoutMissionInput> | MissionEventCreateWithoutMissionInput[] | MissionEventUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionEventCreateOrConnectWithoutMissionInput | MissionEventCreateOrConnectWithoutMissionInput[]
    upsert?: MissionEventUpsertWithWhereUniqueWithoutMissionInput | MissionEventUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: MissionEventCreateManyMissionInputEnvelope
    set?: MissionEventWhereUniqueInput | MissionEventWhereUniqueInput[]
    disconnect?: MissionEventWhereUniqueInput | MissionEventWhereUniqueInput[]
    delete?: MissionEventWhereUniqueInput | MissionEventWhereUniqueInput[]
    connect?: MissionEventWhereUniqueInput | MissionEventWhereUniqueInput[]
    update?: MissionEventUpdateWithWhereUniqueWithoutMissionInput | MissionEventUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?: MissionEventUpdateManyWithWhereWithoutMissionInput | MissionEventUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?: MissionEventScalarWhereInput | MissionEventScalarWhereInput[]
  }

  export type MissionReportUpdateOneWithoutMissionNestedInput = {
    create?: XOR<MissionReportCreateWithoutMissionInput, MissionReportUncheckedCreateWithoutMissionInput>
    connectOrCreate?: MissionReportCreateOrConnectWithoutMissionInput
    upsert?: MissionReportUpsertWithoutMissionInput
    disconnect?: MissionReportWhereInput | boolean
    delete?: MissionReportWhereInput | boolean
    connect?: MissionReportWhereUniqueInput
    update?: XOR<XOR<MissionReportUpdateToOneWithWhereWithoutMissionInput, MissionReportUpdateWithoutMissionInput>, MissionReportUncheckedUpdateWithoutMissionInput>
  }

  export type MissionFlightPathUncheckedUpdateOneWithoutMissionNestedInput = {
    create?: XOR<MissionFlightPathCreateWithoutMissionInput, MissionFlightPathUncheckedCreateWithoutMissionInput>
    connectOrCreate?: MissionFlightPathCreateOrConnectWithoutMissionInput
    upsert?: MissionFlightPathUpsertWithoutMissionInput
    disconnect?: MissionFlightPathWhereInput | boolean
    delete?: MissionFlightPathWhereInput | boolean
    connect?: MissionFlightPathWhereUniqueInput
    update?: XOR<XOR<MissionFlightPathUpdateToOneWithWhereWithoutMissionInput, MissionFlightPathUpdateWithoutMissionInput>, MissionFlightPathUncheckedUpdateWithoutMissionInput>
  }

  export type MissionTelemetryUncheckedUpdateManyWithoutMissionNestedInput = {
    create?: XOR<MissionTelemetryCreateWithoutMissionInput, MissionTelemetryUncheckedCreateWithoutMissionInput> | MissionTelemetryCreateWithoutMissionInput[] | MissionTelemetryUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionTelemetryCreateOrConnectWithoutMissionInput | MissionTelemetryCreateOrConnectWithoutMissionInput[]
    upsert?: MissionTelemetryUpsertWithWhereUniqueWithoutMissionInput | MissionTelemetryUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: MissionTelemetryCreateManyMissionInputEnvelope
    set?: MissionTelemetryWhereUniqueInput | MissionTelemetryWhereUniqueInput[]
    disconnect?: MissionTelemetryWhereUniqueInput | MissionTelemetryWhereUniqueInput[]
    delete?: MissionTelemetryWhereUniqueInput | MissionTelemetryWhereUniqueInput[]
    connect?: MissionTelemetryWhereUniqueInput | MissionTelemetryWhereUniqueInput[]
    update?: MissionTelemetryUpdateWithWhereUniqueWithoutMissionInput | MissionTelemetryUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?: MissionTelemetryUpdateManyWithWhereWithoutMissionInput | MissionTelemetryUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?: MissionTelemetryScalarWhereInput | MissionTelemetryScalarWhereInput[]
  }

  export type MissionEventUncheckedUpdateManyWithoutMissionNestedInput = {
    create?: XOR<MissionEventCreateWithoutMissionInput, MissionEventUncheckedCreateWithoutMissionInput> | MissionEventCreateWithoutMissionInput[] | MissionEventUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionEventCreateOrConnectWithoutMissionInput | MissionEventCreateOrConnectWithoutMissionInput[]
    upsert?: MissionEventUpsertWithWhereUniqueWithoutMissionInput | MissionEventUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: MissionEventCreateManyMissionInputEnvelope
    set?: MissionEventWhereUniqueInput | MissionEventWhereUniqueInput[]
    disconnect?: MissionEventWhereUniqueInput | MissionEventWhereUniqueInput[]
    delete?: MissionEventWhereUniqueInput | MissionEventWhereUniqueInput[]
    connect?: MissionEventWhereUniqueInput | MissionEventWhereUniqueInput[]
    update?: MissionEventUpdateWithWhereUniqueWithoutMissionInput | MissionEventUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?: MissionEventUpdateManyWithWhereWithoutMissionInput | MissionEventUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?: MissionEventScalarWhereInput | MissionEventScalarWhereInput[]
  }

  export type MissionReportUncheckedUpdateOneWithoutMissionNestedInput = {
    create?: XOR<MissionReportCreateWithoutMissionInput, MissionReportUncheckedCreateWithoutMissionInput>
    connectOrCreate?: MissionReportCreateOrConnectWithoutMissionInput
    upsert?: MissionReportUpsertWithoutMissionInput
    disconnect?: MissionReportWhereInput | boolean
    delete?: MissionReportWhereInput | boolean
    connect?: MissionReportWhereUniqueInput
    update?: XOR<XOR<MissionReportUpdateToOneWithWhereWithoutMissionInput, MissionReportUpdateWithoutMissionInput>, MissionReportUncheckedUpdateWithoutMissionInput>
  }

  export type MissionCreateNestedOneWithoutFlightPathInput = {
    create?: XOR<MissionCreateWithoutFlightPathInput, MissionUncheckedCreateWithoutFlightPathInput>
    connectOrCreate?: MissionCreateOrConnectWithoutFlightPathInput
    connect?: MissionWhereUniqueInput
  }

  export type MissionUpdateOneRequiredWithoutFlightPathNestedInput = {
    create?: XOR<MissionCreateWithoutFlightPathInput, MissionUncheckedCreateWithoutFlightPathInput>
    connectOrCreate?: MissionCreateOrConnectWithoutFlightPathInput
    upsert?: MissionUpsertWithoutFlightPathInput
    connect?: MissionWhereUniqueInput
    update?: XOR<XOR<MissionUpdateToOneWithWhereWithoutFlightPathInput, MissionUpdateWithoutFlightPathInput>, MissionUncheckedUpdateWithoutFlightPathInput>
  }

  export type MissionCreateNestedOneWithoutTelemetryInput = {
    create?: XOR<MissionCreateWithoutTelemetryInput, MissionUncheckedCreateWithoutTelemetryInput>
    connectOrCreate?: MissionCreateOrConnectWithoutTelemetryInput
    connect?: MissionWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MissionUpdateOneRequiredWithoutTelemetryNestedInput = {
    create?: XOR<MissionCreateWithoutTelemetryInput, MissionUncheckedCreateWithoutTelemetryInput>
    connectOrCreate?: MissionCreateOrConnectWithoutTelemetryInput
    upsert?: MissionUpsertWithoutTelemetryInput
    connect?: MissionWhereUniqueInput
    update?: XOR<XOR<MissionUpdateToOneWithWhereWithoutTelemetryInput, MissionUpdateWithoutTelemetryInput>, MissionUncheckedUpdateWithoutTelemetryInput>
  }

  export type MissionCreateNestedOneWithoutEventsInput = {
    create?: XOR<MissionCreateWithoutEventsInput, MissionUncheckedCreateWithoutEventsInput>
    connectOrCreate?: MissionCreateOrConnectWithoutEventsInput
    connect?: MissionWhereUniqueInput
  }

  export type MissionUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<MissionCreateWithoutEventsInput, MissionUncheckedCreateWithoutEventsInput>
    connectOrCreate?: MissionCreateOrConnectWithoutEventsInput
    upsert?: MissionUpsertWithoutEventsInput
    connect?: MissionWhereUniqueInput
    update?: XOR<XOR<MissionUpdateToOneWithWhereWithoutEventsInput, MissionUpdateWithoutEventsInput>, MissionUncheckedUpdateWithoutEventsInput>
  }

  export type MissionCreateNestedOneWithoutReportInput = {
    create?: XOR<MissionCreateWithoutReportInput, MissionUncheckedCreateWithoutReportInput>
    connectOrCreate?: MissionCreateOrConnectWithoutReportInput
    connect?: MissionWhereUniqueInput
  }

  export type MissionUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<MissionCreateWithoutReportInput, MissionUncheckedCreateWithoutReportInput>
    connectOrCreate?: MissionCreateOrConnectWithoutReportInput
    upsert?: MissionUpsertWithoutReportInput
    connect?: MissionWhereUniqueInput
    update?: XOR<XOR<MissionUpdateToOneWithWhereWithoutReportInput, MissionUpdateWithoutReportInput>, MissionUncheckedUpdateWithoutReportInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumDroneStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DroneStatus | EnumDroneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DroneStatus[] | ListEnumDroneStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DroneStatus[] | ListEnumDroneStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDroneStatusFilter<$PrismaModel> | $Enums.DroneStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumDroneStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DroneStatus | EnumDroneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DroneStatus[] | ListEnumDroneStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DroneStatus[] | ListEnumDroneStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDroneStatusWithAggregatesFilter<$PrismaModel> | $Enums.DroneStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDroneStatusFilter<$PrismaModel>
    _max?: NestedEnumDroneStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumMissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionStatus | EnumMissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MissionStatus[] | ListEnumMissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MissionStatus[] | ListEnumMissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMissionStatusFilter<$PrismaModel> | $Enums.MissionStatus
  }

  export type NestedEnumMissionPatternFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionPattern | EnumMissionPatternFieldRefInput<$PrismaModel>
    in?: $Enums.MissionPattern[] | ListEnumMissionPatternFieldRefInput<$PrismaModel>
    notIn?: $Enums.MissionPattern[] | ListEnumMissionPatternFieldRefInput<$PrismaModel>
    not?: NestedEnumMissionPatternFilter<$PrismaModel> | $Enums.MissionPattern
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumAbortReasonNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AbortReason | EnumAbortReasonFieldRefInput<$PrismaModel> | null
    in?: $Enums.AbortReason[] | ListEnumAbortReasonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AbortReason[] | ListEnumAbortReasonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAbortReasonNullableFilter<$PrismaModel> | $Enums.AbortReason | null
  }

  export type NestedEnumMissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionStatus | EnumMissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MissionStatus[] | ListEnumMissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MissionStatus[] | ListEnumMissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.MissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMissionStatusFilter<$PrismaModel>
    _max?: NestedEnumMissionStatusFilter<$PrismaModel>
  }

  export type NestedEnumMissionPatternWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionPattern | EnumMissionPatternFieldRefInput<$PrismaModel>
    in?: $Enums.MissionPattern[] | ListEnumMissionPatternFieldRefInput<$PrismaModel>
    notIn?: $Enums.MissionPattern[] | ListEnumMissionPatternFieldRefInput<$PrismaModel>
    not?: NestedEnumMissionPatternWithAggregatesFilter<$PrismaModel> | $Enums.MissionPattern
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMissionPatternFilter<$PrismaModel>
    _max?: NestedEnumMissionPatternFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumAbortReasonNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AbortReason | EnumAbortReasonFieldRefInput<$PrismaModel> | null
    in?: $Enums.AbortReason[] | ListEnumAbortReasonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AbortReason[] | ListEnumAbortReasonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAbortReasonNullableWithAggregatesFilter<$PrismaModel> | $Enums.AbortReason | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAbortReasonNullableFilter<$PrismaModel>
    _max?: NestedEnumAbortReasonNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type MissionCreateWithoutAssignedDroneInput = {
    id?: string
    name: string
    status?: $Enums.MissionStatus
    pattern: $Enums.MissionPattern
    altitude: number
    overlapPercentage: number
    speed: number
    surveyArea: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    abortReason?: $Enums.AbortReason | null
    abortReasonText?: string | null
    phase?: string | null
    phaseStartedAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    pausedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flightPath?: MissionFlightPathCreateNestedOneWithoutMissionInput
    telemetry?: MissionTelemetryCreateNestedManyWithoutMissionInput
    events?: MissionEventCreateNestedManyWithoutMissionInput
    report?: MissionReportCreateNestedOneWithoutMissionInput
  }

  export type MissionUncheckedCreateWithoutAssignedDroneInput = {
    id?: string
    name: string
    status?: $Enums.MissionStatus
    pattern: $Enums.MissionPattern
    altitude: number
    overlapPercentage: number
    speed: number
    surveyArea: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    abortReason?: $Enums.AbortReason | null
    abortReasonText?: string | null
    phase?: string | null
    phaseStartedAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    pausedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flightPath?: MissionFlightPathUncheckedCreateNestedOneWithoutMissionInput
    telemetry?: MissionTelemetryUncheckedCreateNestedManyWithoutMissionInput
    events?: MissionEventUncheckedCreateNestedManyWithoutMissionInput
    report?: MissionReportUncheckedCreateNestedOneWithoutMissionInput
  }

  export type MissionCreateOrConnectWithoutAssignedDroneInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutAssignedDroneInput, MissionUncheckedCreateWithoutAssignedDroneInput>
  }

  export type MissionCreateManyAssignedDroneInputEnvelope = {
    data: MissionCreateManyAssignedDroneInput | MissionCreateManyAssignedDroneInput[]
    skipDuplicates?: boolean
  }

  export type MissionUpsertWithWhereUniqueWithoutAssignedDroneInput = {
    where: MissionWhereUniqueInput
    update: XOR<MissionUpdateWithoutAssignedDroneInput, MissionUncheckedUpdateWithoutAssignedDroneInput>
    create: XOR<MissionCreateWithoutAssignedDroneInput, MissionUncheckedCreateWithoutAssignedDroneInput>
  }

  export type MissionUpdateWithWhereUniqueWithoutAssignedDroneInput = {
    where: MissionWhereUniqueInput
    data: XOR<MissionUpdateWithoutAssignedDroneInput, MissionUncheckedUpdateWithoutAssignedDroneInput>
  }

  export type MissionUpdateManyWithWhereWithoutAssignedDroneInput = {
    where: MissionScalarWhereInput
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyWithoutAssignedDroneInput>
  }

  export type MissionScalarWhereInput = {
    AND?: MissionScalarWhereInput | MissionScalarWhereInput[]
    OR?: MissionScalarWhereInput[]
    NOT?: MissionScalarWhereInput | MissionScalarWhereInput[]
    id?: StringFilter<"Mission"> | string
    name?: StringFilter<"Mission"> | string
    status?: EnumMissionStatusFilter<"Mission"> | $Enums.MissionStatus
    pattern?: EnumMissionPatternFilter<"Mission"> | $Enums.MissionPattern
    altitude?: IntFilter<"Mission"> | number
    overlapPercentage?: IntFilter<"Mission"> | number
    speed?: IntFilter<"Mission"> | number
    surveyArea?: JsonFilter<"Mission">
    patternConfig?: JsonNullableFilter<"Mission">
    assignedDroneId?: StringNullableFilter<"Mission"> | string | null
    abortReason?: EnumAbortReasonNullableFilter<"Mission"> | $Enums.AbortReason | null
    abortReasonText?: StringNullableFilter<"Mission"> | string | null
    phase?: StringNullableFilter<"Mission"> | string | null
    phaseStartedAt?: DateTimeNullableFilter<"Mission"> | Date | string | null
    startedAt?: DateTimeNullableFilter<"Mission"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Mission"> | Date | string | null
    pausedAt?: DateTimeNullableFilter<"Mission"> | Date | string | null
    createdAt?: DateTimeFilter<"Mission"> | Date | string
    updatedAt?: DateTimeFilter<"Mission"> | Date | string
  }

  export type DroneCreateWithoutMissionsInput = {
    id?: string
    name: string
    batteryLevel?: number
    status?: $Enums.DroneStatus
    health?: string
    lastSeenAt?: Date | string | null
    homeBaseLat?: number
    homeBaseLng?: number
    maxRange?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DroneUncheckedCreateWithoutMissionsInput = {
    id?: string
    name: string
    batteryLevel?: number
    status?: $Enums.DroneStatus
    health?: string
    lastSeenAt?: Date | string | null
    homeBaseLat?: number
    homeBaseLng?: number
    maxRange?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DroneCreateOrConnectWithoutMissionsInput = {
    where: DroneWhereUniqueInput
    create: XOR<DroneCreateWithoutMissionsInput, DroneUncheckedCreateWithoutMissionsInput>
  }

  export type MissionFlightPathCreateWithoutMissionInput = {
    id?: string
    waypoints: JsonNullValueInput | InputJsonValue
    waypointCount: number
    estimatedDistanceMeters: number
    estimatedDurationSeconds: number
    createdAt?: Date | string
  }

  export type MissionFlightPathUncheckedCreateWithoutMissionInput = {
    id?: string
    waypoints: JsonNullValueInput | InputJsonValue
    waypointCount: number
    estimatedDistanceMeters: number
    estimatedDurationSeconds: number
    createdAt?: Date | string
  }

  export type MissionFlightPathCreateOrConnectWithoutMissionInput = {
    where: MissionFlightPathWhereUniqueInput
    create: XOR<MissionFlightPathCreateWithoutMissionInput, MissionFlightPathUncheckedCreateWithoutMissionInput>
  }

  export type MissionTelemetryCreateWithoutMissionInput = {
    id?: bigint | number
    latitude: number
    longitude: number
    altitude?: number | null
    heading?: number | null
    speed?: number | null
    phase?: string | null
    progress: number
    etaSeconds?: number | null
    waypointIndex?: number | null
    distanceTraveled?: number | null
    distanceRemaining?: number | null
    batteryLevel?: number | null
    batteryVoltage?: number | null
    signalStrength?: number | null
    motorTemp?: number | null
    airQualityIndex?: number | null
    temperature?: number | null
    humidity?: number | null
    particulateMatter?: number | null
    recordedAt?: Date | string
  }

  export type MissionTelemetryUncheckedCreateWithoutMissionInput = {
    id?: bigint | number
    latitude: number
    longitude: number
    altitude?: number | null
    heading?: number | null
    speed?: number | null
    phase?: string | null
    progress: number
    etaSeconds?: number | null
    waypointIndex?: number | null
    distanceTraveled?: number | null
    distanceRemaining?: number | null
    batteryLevel?: number | null
    batteryVoltage?: number | null
    signalStrength?: number | null
    motorTemp?: number | null
    airQualityIndex?: number | null
    temperature?: number | null
    humidity?: number | null
    particulateMatter?: number | null
    recordedAt?: Date | string
  }

  export type MissionTelemetryCreateOrConnectWithoutMissionInput = {
    where: MissionTelemetryWhereUniqueInput
    create: XOR<MissionTelemetryCreateWithoutMissionInput, MissionTelemetryUncheckedCreateWithoutMissionInput>
  }

  export type MissionTelemetryCreateManyMissionInputEnvelope = {
    data: MissionTelemetryCreateManyMissionInput | MissionTelemetryCreateManyMissionInput[]
    skipDuplicates?: boolean
  }

  export type MissionEventCreateWithoutMissionInput = {
    id?: string
    eventType: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MissionEventUncheckedCreateWithoutMissionInput = {
    id?: string
    eventType: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MissionEventCreateOrConnectWithoutMissionInput = {
    where: MissionEventWhereUniqueInput
    create: XOR<MissionEventCreateWithoutMissionInput, MissionEventUncheckedCreateWithoutMissionInput>
  }

  export type MissionEventCreateManyMissionInputEnvelope = {
    data: MissionEventCreateManyMissionInput | MissionEventCreateManyMissionInput[]
    skipDuplicates?: boolean
  }

  export type MissionReportCreateWithoutMissionInput = {
    id?: string
    durationSeconds: number
    distanceMeters: number
    coverageAreaSqm: number
    createdAt?: Date | string
  }

  export type MissionReportUncheckedCreateWithoutMissionInput = {
    id?: string
    durationSeconds: number
    distanceMeters: number
    coverageAreaSqm: number
    createdAt?: Date | string
  }

  export type MissionReportCreateOrConnectWithoutMissionInput = {
    where: MissionReportWhereUniqueInput
    create: XOR<MissionReportCreateWithoutMissionInput, MissionReportUncheckedCreateWithoutMissionInput>
  }

  export type DroneUpsertWithoutMissionsInput = {
    update: XOR<DroneUpdateWithoutMissionsInput, DroneUncheckedUpdateWithoutMissionsInput>
    create: XOR<DroneCreateWithoutMissionsInput, DroneUncheckedCreateWithoutMissionsInput>
    where?: DroneWhereInput
  }

  export type DroneUpdateToOneWithWhereWithoutMissionsInput = {
    where?: DroneWhereInput
    data: XOR<DroneUpdateWithoutMissionsInput, DroneUncheckedUpdateWithoutMissionsInput>
  }

  export type DroneUpdateWithoutMissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    batteryLevel?: IntFieldUpdateOperationsInput | number
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    health?: StringFieldUpdateOperationsInput | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    homeBaseLat?: FloatFieldUpdateOperationsInput | number
    homeBaseLng?: FloatFieldUpdateOperationsInput | number
    maxRange?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DroneUncheckedUpdateWithoutMissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    batteryLevel?: IntFieldUpdateOperationsInput | number
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    health?: StringFieldUpdateOperationsInput | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    homeBaseLat?: FloatFieldUpdateOperationsInput | number
    homeBaseLng?: FloatFieldUpdateOperationsInput | number
    maxRange?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionFlightPathUpsertWithoutMissionInput = {
    update: XOR<MissionFlightPathUpdateWithoutMissionInput, MissionFlightPathUncheckedUpdateWithoutMissionInput>
    create: XOR<MissionFlightPathCreateWithoutMissionInput, MissionFlightPathUncheckedCreateWithoutMissionInput>
    where?: MissionFlightPathWhereInput
  }

  export type MissionFlightPathUpdateToOneWithWhereWithoutMissionInput = {
    where?: MissionFlightPathWhereInput
    data: XOR<MissionFlightPathUpdateWithoutMissionInput, MissionFlightPathUncheckedUpdateWithoutMissionInput>
  }

  export type MissionFlightPathUpdateWithoutMissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    waypoints?: JsonNullValueInput | InputJsonValue
    waypointCount?: IntFieldUpdateOperationsInput | number
    estimatedDistanceMeters?: FloatFieldUpdateOperationsInput | number
    estimatedDurationSeconds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionFlightPathUncheckedUpdateWithoutMissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    waypoints?: JsonNullValueInput | InputJsonValue
    waypointCount?: IntFieldUpdateOperationsInput | number
    estimatedDistanceMeters?: FloatFieldUpdateOperationsInput | number
    estimatedDurationSeconds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionTelemetryUpsertWithWhereUniqueWithoutMissionInput = {
    where: MissionTelemetryWhereUniqueInput
    update: XOR<MissionTelemetryUpdateWithoutMissionInput, MissionTelemetryUncheckedUpdateWithoutMissionInput>
    create: XOR<MissionTelemetryCreateWithoutMissionInput, MissionTelemetryUncheckedCreateWithoutMissionInput>
  }

  export type MissionTelemetryUpdateWithWhereUniqueWithoutMissionInput = {
    where: MissionTelemetryWhereUniqueInput
    data: XOR<MissionTelemetryUpdateWithoutMissionInput, MissionTelemetryUncheckedUpdateWithoutMissionInput>
  }

  export type MissionTelemetryUpdateManyWithWhereWithoutMissionInput = {
    where: MissionTelemetryScalarWhereInput
    data: XOR<MissionTelemetryUpdateManyMutationInput, MissionTelemetryUncheckedUpdateManyWithoutMissionInput>
  }

  export type MissionTelemetryScalarWhereInput = {
    AND?: MissionTelemetryScalarWhereInput | MissionTelemetryScalarWhereInput[]
    OR?: MissionTelemetryScalarWhereInput[]
    NOT?: MissionTelemetryScalarWhereInput | MissionTelemetryScalarWhereInput[]
    id?: BigIntFilter<"MissionTelemetry"> | bigint | number
    missionId?: StringFilter<"MissionTelemetry"> | string
    latitude?: FloatFilter<"MissionTelemetry"> | number
    longitude?: FloatFilter<"MissionTelemetry"> | number
    altitude?: FloatNullableFilter<"MissionTelemetry"> | number | null
    heading?: FloatNullableFilter<"MissionTelemetry"> | number | null
    speed?: FloatNullableFilter<"MissionTelemetry"> | number | null
    phase?: StringNullableFilter<"MissionTelemetry"> | string | null
    progress?: IntFilter<"MissionTelemetry"> | number
    etaSeconds?: IntNullableFilter<"MissionTelemetry"> | number | null
    waypointIndex?: IntNullableFilter<"MissionTelemetry"> | number | null
    distanceTraveled?: FloatNullableFilter<"MissionTelemetry"> | number | null
    distanceRemaining?: FloatNullableFilter<"MissionTelemetry"> | number | null
    batteryLevel?: IntNullableFilter<"MissionTelemetry"> | number | null
    batteryVoltage?: FloatNullableFilter<"MissionTelemetry"> | number | null
    signalStrength?: IntNullableFilter<"MissionTelemetry"> | number | null
    motorTemp?: FloatNullableFilter<"MissionTelemetry"> | number | null
    airQualityIndex?: IntNullableFilter<"MissionTelemetry"> | number | null
    temperature?: FloatNullableFilter<"MissionTelemetry"> | number | null
    humidity?: FloatNullableFilter<"MissionTelemetry"> | number | null
    particulateMatter?: FloatNullableFilter<"MissionTelemetry"> | number | null
    recordedAt?: DateTimeFilter<"MissionTelemetry"> | Date | string
  }

  export type MissionEventUpsertWithWhereUniqueWithoutMissionInput = {
    where: MissionEventWhereUniqueInput
    update: XOR<MissionEventUpdateWithoutMissionInput, MissionEventUncheckedUpdateWithoutMissionInput>
    create: XOR<MissionEventCreateWithoutMissionInput, MissionEventUncheckedCreateWithoutMissionInput>
  }

  export type MissionEventUpdateWithWhereUniqueWithoutMissionInput = {
    where: MissionEventWhereUniqueInput
    data: XOR<MissionEventUpdateWithoutMissionInput, MissionEventUncheckedUpdateWithoutMissionInput>
  }

  export type MissionEventUpdateManyWithWhereWithoutMissionInput = {
    where: MissionEventScalarWhereInput
    data: XOR<MissionEventUpdateManyMutationInput, MissionEventUncheckedUpdateManyWithoutMissionInput>
  }

  export type MissionEventScalarWhereInput = {
    AND?: MissionEventScalarWhereInput | MissionEventScalarWhereInput[]
    OR?: MissionEventScalarWhereInput[]
    NOT?: MissionEventScalarWhereInput | MissionEventScalarWhereInput[]
    id?: StringFilter<"MissionEvent"> | string
    missionId?: StringFilter<"MissionEvent"> | string
    eventType?: StringFilter<"MissionEvent"> | string
    payload?: JsonNullableFilter<"MissionEvent">
    createdAt?: DateTimeFilter<"MissionEvent"> | Date | string
  }

  export type MissionReportUpsertWithoutMissionInput = {
    update: XOR<MissionReportUpdateWithoutMissionInput, MissionReportUncheckedUpdateWithoutMissionInput>
    create: XOR<MissionReportCreateWithoutMissionInput, MissionReportUncheckedCreateWithoutMissionInput>
    where?: MissionReportWhereInput
  }

  export type MissionReportUpdateToOneWithWhereWithoutMissionInput = {
    where?: MissionReportWhereInput
    data: XOR<MissionReportUpdateWithoutMissionInput, MissionReportUncheckedUpdateWithoutMissionInput>
  }

  export type MissionReportUpdateWithoutMissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    durationSeconds?: IntFieldUpdateOperationsInput | number
    distanceMeters?: FloatFieldUpdateOperationsInput | number
    coverageAreaSqm?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionReportUncheckedUpdateWithoutMissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    durationSeconds?: IntFieldUpdateOperationsInput | number
    distanceMeters?: FloatFieldUpdateOperationsInput | number
    coverageAreaSqm?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionCreateWithoutFlightPathInput = {
    id?: string
    name: string
    status?: $Enums.MissionStatus
    pattern: $Enums.MissionPattern
    altitude: number
    overlapPercentage: number
    speed: number
    surveyArea: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    abortReason?: $Enums.AbortReason | null
    abortReasonText?: string | null
    phase?: string | null
    phaseStartedAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    pausedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedDrone?: DroneCreateNestedOneWithoutMissionsInput
    telemetry?: MissionTelemetryCreateNestedManyWithoutMissionInput
    events?: MissionEventCreateNestedManyWithoutMissionInput
    report?: MissionReportCreateNestedOneWithoutMissionInput
  }

  export type MissionUncheckedCreateWithoutFlightPathInput = {
    id?: string
    name: string
    status?: $Enums.MissionStatus
    pattern: $Enums.MissionPattern
    altitude: number
    overlapPercentage: number
    speed: number
    surveyArea: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    assignedDroneId?: string | null
    abortReason?: $Enums.AbortReason | null
    abortReasonText?: string | null
    phase?: string | null
    phaseStartedAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    pausedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    telemetry?: MissionTelemetryUncheckedCreateNestedManyWithoutMissionInput
    events?: MissionEventUncheckedCreateNestedManyWithoutMissionInput
    report?: MissionReportUncheckedCreateNestedOneWithoutMissionInput
  }

  export type MissionCreateOrConnectWithoutFlightPathInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutFlightPathInput, MissionUncheckedCreateWithoutFlightPathInput>
  }

  export type MissionUpsertWithoutFlightPathInput = {
    update: XOR<MissionUpdateWithoutFlightPathInput, MissionUncheckedUpdateWithoutFlightPathInput>
    create: XOR<MissionCreateWithoutFlightPathInput, MissionUncheckedCreateWithoutFlightPathInput>
    where?: MissionWhereInput
  }

  export type MissionUpdateToOneWithWhereWithoutFlightPathInput = {
    where?: MissionWhereInput
    data: XOR<MissionUpdateWithoutFlightPathInput, MissionUncheckedUpdateWithoutFlightPathInput>
  }

  export type MissionUpdateWithoutFlightPathInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    pattern?: EnumMissionPatternFieldUpdateOperationsInput | $Enums.MissionPattern
    altitude?: IntFieldUpdateOperationsInput | number
    overlapPercentage?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    surveyArea?: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    abortReason?: NullableEnumAbortReasonFieldUpdateOperationsInput | $Enums.AbortReason | null
    abortReasonText?: NullableStringFieldUpdateOperationsInput | string | null
    phase?: NullableStringFieldUpdateOperationsInput | string | null
    phaseStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pausedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedDrone?: DroneUpdateOneWithoutMissionsNestedInput
    telemetry?: MissionTelemetryUpdateManyWithoutMissionNestedInput
    events?: MissionEventUpdateManyWithoutMissionNestedInput
    report?: MissionReportUpdateOneWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateWithoutFlightPathInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    pattern?: EnumMissionPatternFieldUpdateOperationsInput | $Enums.MissionPattern
    altitude?: IntFieldUpdateOperationsInput | number
    overlapPercentage?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    surveyArea?: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    assignedDroneId?: NullableStringFieldUpdateOperationsInput | string | null
    abortReason?: NullableEnumAbortReasonFieldUpdateOperationsInput | $Enums.AbortReason | null
    abortReasonText?: NullableStringFieldUpdateOperationsInput | string | null
    phase?: NullableStringFieldUpdateOperationsInput | string | null
    phaseStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pausedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telemetry?: MissionTelemetryUncheckedUpdateManyWithoutMissionNestedInput
    events?: MissionEventUncheckedUpdateManyWithoutMissionNestedInput
    report?: MissionReportUncheckedUpdateOneWithoutMissionNestedInput
  }

  export type MissionCreateWithoutTelemetryInput = {
    id?: string
    name: string
    status?: $Enums.MissionStatus
    pattern: $Enums.MissionPattern
    altitude: number
    overlapPercentage: number
    speed: number
    surveyArea: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    abortReason?: $Enums.AbortReason | null
    abortReasonText?: string | null
    phase?: string | null
    phaseStartedAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    pausedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedDrone?: DroneCreateNestedOneWithoutMissionsInput
    flightPath?: MissionFlightPathCreateNestedOneWithoutMissionInput
    events?: MissionEventCreateNestedManyWithoutMissionInput
    report?: MissionReportCreateNestedOneWithoutMissionInput
  }

  export type MissionUncheckedCreateWithoutTelemetryInput = {
    id?: string
    name: string
    status?: $Enums.MissionStatus
    pattern: $Enums.MissionPattern
    altitude: number
    overlapPercentage: number
    speed: number
    surveyArea: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    assignedDroneId?: string | null
    abortReason?: $Enums.AbortReason | null
    abortReasonText?: string | null
    phase?: string | null
    phaseStartedAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    pausedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flightPath?: MissionFlightPathUncheckedCreateNestedOneWithoutMissionInput
    events?: MissionEventUncheckedCreateNestedManyWithoutMissionInput
    report?: MissionReportUncheckedCreateNestedOneWithoutMissionInput
  }

  export type MissionCreateOrConnectWithoutTelemetryInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutTelemetryInput, MissionUncheckedCreateWithoutTelemetryInput>
  }

  export type MissionUpsertWithoutTelemetryInput = {
    update: XOR<MissionUpdateWithoutTelemetryInput, MissionUncheckedUpdateWithoutTelemetryInput>
    create: XOR<MissionCreateWithoutTelemetryInput, MissionUncheckedCreateWithoutTelemetryInput>
    where?: MissionWhereInput
  }

  export type MissionUpdateToOneWithWhereWithoutTelemetryInput = {
    where?: MissionWhereInput
    data: XOR<MissionUpdateWithoutTelemetryInput, MissionUncheckedUpdateWithoutTelemetryInput>
  }

  export type MissionUpdateWithoutTelemetryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    pattern?: EnumMissionPatternFieldUpdateOperationsInput | $Enums.MissionPattern
    altitude?: IntFieldUpdateOperationsInput | number
    overlapPercentage?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    surveyArea?: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    abortReason?: NullableEnumAbortReasonFieldUpdateOperationsInput | $Enums.AbortReason | null
    abortReasonText?: NullableStringFieldUpdateOperationsInput | string | null
    phase?: NullableStringFieldUpdateOperationsInput | string | null
    phaseStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pausedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedDrone?: DroneUpdateOneWithoutMissionsNestedInput
    flightPath?: MissionFlightPathUpdateOneWithoutMissionNestedInput
    events?: MissionEventUpdateManyWithoutMissionNestedInput
    report?: MissionReportUpdateOneWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateWithoutTelemetryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    pattern?: EnumMissionPatternFieldUpdateOperationsInput | $Enums.MissionPattern
    altitude?: IntFieldUpdateOperationsInput | number
    overlapPercentage?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    surveyArea?: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    assignedDroneId?: NullableStringFieldUpdateOperationsInput | string | null
    abortReason?: NullableEnumAbortReasonFieldUpdateOperationsInput | $Enums.AbortReason | null
    abortReasonText?: NullableStringFieldUpdateOperationsInput | string | null
    phase?: NullableStringFieldUpdateOperationsInput | string | null
    phaseStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pausedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightPath?: MissionFlightPathUncheckedUpdateOneWithoutMissionNestedInput
    events?: MissionEventUncheckedUpdateManyWithoutMissionNestedInput
    report?: MissionReportUncheckedUpdateOneWithoutMissionNestedInput
  }

  export type MissionCreateWithoutEventsInput = {
    id?: string
    name: string
    status?: $Enums.MissionStatus
    pattern: $Enums.MissionPattern
    altitude: number
    overlapPercentage: number
    speed: number
    surveyArea: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    abortReason?: $Enums.AbortReason | null
    abortReasonText?: string | null
    phase?: string | null
    phaseStartedAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    pausedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedDrone?: DroneCreateNestedOneWithoutMissionsInput
    flightPath?: MissionFlightPathCreateNestedOneWithoutMissionInput
    telemetry?: MissionTelemetryCreateNestedManyWithoutMissionInput
    report?: MissionReportCreateNestedOneWithoutMissionInput
  }

  export type MissionUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    status?: $Enums.MissionStatus
    pattern: $Enums.MissionPattern
    altitude: number
    overlapPercentage: number
    speed: number
    surveyArea: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    assignedDroneId?: string | null
    abortReason?: $Enums.AbortReason | null
    abortReasonText?: string | null
    phase?: string | null
    phaseStartedAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    pausedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flightPath?: MissionFlightPathUncheckedCreateNestedOneWithoutMissionInput
    telemetry?: MissionTelemetryUncheckedCreateNestedManyWithoutMissionInput
    report?: MissionReportUncheckedCreateNestedOneWithoutMissionInput
  }

  export type MissionCreateOrConnectWithoutEventsInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutEventsInput, MissionUncheckedCreateWithoutEventsInput>
  }

  export type MissionUpsertWithoutEventsInput = {
    update: XOR<MissionUpdateWithoutEventsInput, MissionUncheckedUpdateWithoutEventsInput>
    create: XOR<MissionCreateWithoutEventsInput, MissionUncheckedCreateWithoutEventsInput>
    where?: MissionWhereInput
  }

  export type MissionUpdateToOneWithWhereWithoutEventsInput = {
    where?: MissionWhereInput
    data: XOR<MissionUpdateWithoutEventsInput, MissionUncheckedUpdateWithoutEventsInput>
  }

  export type MissionUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    pattern?: EnumMissionPatternFieldUpdateOperationsInput | $Enums.MissionPattern
    altitude?: IntFieldUpdateOperationsInput | number
    overlapPercentage?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    surveyArea?: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    abortReason?: NullableEnumAbortReasonFieldUpdateOperationsInput | $Enums.AbortReason | null
    abortReasonText?: NullableStringFieldUpdateOperationsInput | string | null
    phase?: NullableStringFieldUpdateOperationsInput | string | null
    phaseStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pausedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedDrone?: DroneUpdateOneWithoutMissionsNestedInput
    flightPath?: MissionFlightPathUpdateOneWithoutMissionNestedInput
    telemetry?: MissionTelemetryUpdateManyWithoutMissionNestedInput
    report?: MissionReportUpdateOneWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    pattern?: EnumMissionPatternFieldUpdateOperationsInput | $Enums.MissionPattern
    altitude?: IntFieldUpdateOperationsInput | number
    overlapPercentage?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    surveyArea?: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    assignedDroneId?: NullableStringFieldUpdateOperationsInput | string | null
    abortReason?: NullableEnumAbortReasonFieldUpdateOperationsInput | $Enums.AbortReason | null
    abortReasonText?: NullableStringFieldUpdateOperationsInput | string | null
    phase?: NullableStringFieldUpdateOperationsInput | string | null
    phaseStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pausedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightPath?: MissionFlightPathUncheckedUpdateOneWithoutMissionNestedInput
    telemetry?: MissionTelemetryUncheckedUpdateManyWithoutMissionNestedInput
    report?: MissionReportUncheckedUpdateOneWithoutMissionNestedInput
  }

  export type MissionCreateWithoutReportInput = {
    id?: string
    name: string
    status?: $Enums.MissionStatus
    pattern: $Enums.MissionPattern
    altitude: number
    overlapPercentage: number
    speed: number
    surveyArea: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    abortReason?: $Enums.AbortReason | null
    abortReasonText?: string | null
    phase?: string | null
    phaseStartedAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    pausedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedDrone?: DroneCreateNestedOneWithoutMissionsInput
    flightPath?: MissionFlightPathCreateNestedOneWithoutMissionInput
    telemetry?: MissionTelemetryCreateNestedManyWithoutMissionInput
    events?: MissionEventCreateNestedManyWithoutMissionInput
  }

  export type MissionUncheckedCreateWithoutReportInput = {
    id?: string
    name: string
    status?: $Enums.MissionStatus
    pattern: $Enums.MissionPattern
    altitude: number
    overlapPercentage: number
    speed: number
    surveyArea: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    assignedDroneId?: string | null
    abortReason?: $Enums.AbortReason | null
    abortReasonText?: string | null
    phase?: string | null
    phaseStartedAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    pausedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flightPath?: MissionFlightPathUncheckedCreateNestedOneWithoutMissionInput
    telemetry?: MissionTelemetryUncheckedCreateNestedManyWithoutMissionInput
    events?: MissionEventUncheckedCreateNestedManyWithoutMissionInput
  }

  export type MissionCreateOrConnectWithoutReportInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutReportInput, MissionUncheckedCreateWithoutReportInput>
  }

  export type MissionUpsertWithoutReportInput = {
    update: XOR<MissionUpdateWithoutReportInput, MissionUncheckedUpdateWithoutReportInput>
    create: XOR<MissionCreateWithoutReportInput, MissionUncheckedCreateWithoutReportInput>
    where?: MissionWhereInput
  }

  export type MissionUpdateToOneWithWhereWithoutReportInput = {
    where?: MissionWhereInput
    data: XOR<MissionUpdateWithoutReportInput, MissionUncheckedUpdateWithoutReportInput>
  }

  export type MissionUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    pattern?: EnumMissionPatternFieldUpdateOperationsInput | $Enums.MissionPattern
    altitude?: IntFieldUpdateOperationsInput | number
    overlapPercentage?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    surveyArea?: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    abortReason?: NullableEnumAbortReasonFieldUpdateOperationsInput | $Enums.AbortReason | null
    abortReasonText?: NullableStringFieldUpdateOperationsInput | string | null
    phase?: NullableStringFieldUpdateOperationsInput | string | null
    phaseStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pausedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedDrone?: DroneUpdateOneWithoutMissionsNestedInput
    flightPath?: MissionFlightPathUpdateOneWithoutMissionNestedInput
    telemetry?: MissionTelemetryUpdateManyWithoutMissionNestedInput
    events?: MissionEventUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    pattern?: EnumMissionPatternFieldUpdateOperationsInput | $Enums.MissionPattern
    altitude?: IntFieldUpdateOperationsInput | number
    overlapPercentage?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    surveyArea?: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    assignedDroneId?: NullableStringFieldUpdateOperationsInput | string | null
    abortReason?: NullableEnumAbortReasonFieldUpdateOperationsInput | $Enums.AbortReason | null
    abortReasonText?: NullableStringFieldUpdateOperationsInput | string | null
    phase?: NullableStringFieldUpdateOperationsInput | string | null
    phaseStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pausedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightPath?: MissionFlightPathUncheckedUpdateOneWithoutMissionNestedInput
    telemetry?: MissionTelemetryUncheckedUpdateManyWithoutMissionNestedInput
    events?: MissionEventUncheckedUpdateManyWithoutMissionNestedInput
  }

  export type MissionCreateManyAssignedDroneInput = {
    id?: string
    name: string
    status?: $Enums.MissionStatus
    pattern: $Enums.MissionPattern
    altitude: number
    overlapPercentage: number
    speed: number
    surveyArea: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    abortReason?: $Enums.AbortReason | null
    abortReasonText?: string | null
    phase?: string | null
    phaseStartedAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    pausedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MissionUpdateWithoutAssignedDroneInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    pattern?: EnumMissionPatternFieldUpdateOperationsInput | $Enums.MissionPattern
    altitude?: IntFieldUpdateOperationsInput | number
    overlapPercentage?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    surveyArea?: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    abortReason?: NullableEnumAbortReasonFieldUpdateOperationsInput | $Enums.AbortReason | null
    abortReasonText?: NullableStringFieldUpdateOperationsInput | string | null
    phase?: NullableStringFieldUpdateOperationsInput | string | null
    phaseStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pausedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightPath?: MissionFlightPathUpdateOneWithoutMissionNestedInput
    telemetry?: MissionTelemetryUpdateManyWithoutMissionNestedInput
    events?: MissionEventUpdateManyWithoutMissionNestedInput
    report?: MissionReportUpdateOneWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateWithoutAssignedDroneInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    pattern?: EnumMissionPatternFieldUpdateOperationsInput | $Enums.MissionPattern
    altitude?: IntFieldUpdateOperationsInput | number
    overlapPercentage?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    surveyArea?: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    abortReason?: NullableEnumAbortReasonFieldUpdateOperationsInput | $Enums.AbortReason | null
    abortReasonText?: NullableStringFieldUpdateOperationsInput | string | null
    phase?: NullableStringFieldUpdateOperationsInput | string | null
    phaseStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pausedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightPath?: MissionFlightPathUncheckedUpdateOneWithoutMissionNestedInput
    telemetry?: MissionTelemetryUncheckedUpdateManyWithoutMissionNestedInput
    events?: MissionEventUncheckedUpdateManyWithoutMissionNestedInput
    report?: MissionReportUncheckedUpdateOneWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateManyWithoutAssignedDroneInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    pattern?: EnumMissionPatternFieldUpdateOperationsInput | $Enums.MissionPattern
    altitude?: IntFieldUpdateOperationsInput | number
    overlapPercentage?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    surveyArea?: JsonNullValueInput | InputJsonValue
    patternConfig?: NullableJsonNullValueInput | InputJsonValue
    abortReason?: NullableEnumAbortReasonFieldUpdateOperationsInput | $Enums.AbortReason | null
    abortReasonText?: NullableStringFieldUpdateOperationsInput | string | null
    phase?: NullableStringFieldUpdateOperationsInput | string | null
    phaseStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pausedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionTelemetryCreateManyMissionInput = {
    id?: bigint | number
    latitude: number
    longitude: number
    altitude?: number | null
    heading?: number | null
    speed?: number | null
    phase?: string | null
    progress: number
    etaSeconds?: number | null
    waypointIndex?: number | null
    distanceTraveled?: number | null
    distanceRemaining?: number | null
    batteryLevel?: number | null
    batteryVoltage?: number | null
    signalStrength?: number | null
    motorTemp?: number | null
    airQualityIndex?: number | null
    temperature?: number | null
    humidity?: number | null
    particulateMatter?: number | null
    recordedAt?: Date | string
  }

  export type MissionEventCreateManyMissionInput = {
    id?: string
    eventType: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MissionTelemetryUpdateWithoutMissionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    heading?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    phase?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: IntFieldUpdateOperationsInput | number
    etaSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    waypointIndex?: NullableIntFieldUpdateOperationsInput | number | null
    distanceTraveled?: NullableFloatFieldUpdateOperationsInput | number | null
    distanceRemaining?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryLevel?: NullableIntFieldUpdateOperationsInput | number | null
    batteryVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    signalStrength?: NullableIntFieldUpdateOperationsInput | number | null
    motorTemp?: NullableFloatFieldUpdateOperationsInput | number | null
    airQualityIndex?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    particulateMatter?: NullableFloatFieldUpdateOperationsInput | number | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionTelemetryUncheckedUpdateWithoutMissionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    heading?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    phase?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: IntFieldUpdateOperationsInput | number
    etaSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    waypointIndex?: NullableIntFieldUpdateOperationsInput | number | null
    distanceTraveled?: NullableFloatFieldUpdateOperationsInput | number | null
    distanceRemaining?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryLevel?: NullableIntFieldUpdateOperationsInput | number | null
    batteryVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    signalStrength?: NullableIntFieldUpdateOperationsInput | number | null
    motorTemp?: NullableFloatFieldUpdateOperationsInput | number | null
    airQualityIndex?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    particulateMatter?: NullableFloatFieldUpdateOperationsInput | number | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionTelemetryUncheckedUpdateManyWithoutMissionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    heading?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    phase?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: IntFieldUpdateOperationsInput | number
    etaSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    waypointIndex?: NullableIntFieldUpdateOperationsInput | number | null
    distanceTraveled?: NullableFloatFieldUpdateOperationsInput | number | null
    distanceRemaining?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryLevel?: NullableIntFieldUpdateOperationsInput | number | null
    batteryVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    signalStrength?: NullableIntFieldUpdateOperationsInput | number | null
    motorTemp?: NullableFloatFieldUpdateOperationsInput | number | null
    airQualityIndex?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    particulateMatter?: NullableFloatFieldUpdateOperationsInput | number | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionEventUpdateWithoutMissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionEventUncheckedUpdateWithoutMissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionEventUncheckedUpdateManyWithoutMissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}