class Server {
    start(config: ServerConfig) {
        const actualConfig = { ...defaultConfig, ...config };
    }
}

type ServerConfig = {
    port: number;
    hostname: string;
    log: boolean;
    timeout: number;
    //other things
}

const defaultConfig: ServerConfig = {
    port: 8080,
    hostname: 'localhost',
    log: true,
    timeout: 5000
}

function startServer(config: Partial<ServerConfig>) {
    const actualConfig: ServerConfig = { ...defaultConfig, ...config };

    const server = new Server().start(actualConfig);
}

startServer({ port: 3000 });