import 'dotenv/config';
import { createServer } from 'http';
import app from './app';
import { initializeWebSocket } from './modules/telemetry/telemetry.gateway';
import prisma from './shared/db';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
    try {
        
        await prisma.$connect();
        console.log('✅ Database connected');

        
        const httpServer = createServer(app);

        
        initializeWebSocket(httpServer);
        console.log('✅ WebSocket server initialized');

        
        httpServer.listen(PORT, () => {
            console.log(`
🚁 Drone Survey Management System API
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌐 Server:     http://localhost:${PORT}
📡 WebSocket:  ws://localhost:${PORT}/ws/telemetry
📊 Health:     http://localhost:${PORT}/api/health

Environment: ${process.env.NODE_ENV || 'development'}
      `);
        });

        
        const shutdown = async () => {
            console.log('\n🛑 Shutting down...');
            await prisma.$disconnect();
            process.exit(0);
        };

        process.on('SIGINT', shutdown);
        process.on('SIGTERM', shutdown);

    } catch (error) {
        console.error('❌ Failed to start server:', error);
        await prisma.$disconnect();
        process.exit(1);
    }
}

bootstrap();
