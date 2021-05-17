import mongoose from 'mongoose';
import traceability from 'traceability';
import IDatabase from '../database.interface';

const { Logger } = traceability;

class Database implements IDatabase {
  private readonly DB_URI;

  private DB_CONNECTION: mongoose.Connection | undefined;

  constructor(DB_URI: string) {
    this.DB_URI = DB_URI;

    mongoose.connection?.once('open', () => {
      Logger.info('Connection Stablished - MongoDB');
    });

    mongoose.connection?.on('error', (err) => {
      Logger.error(`Error to connect - MongoDB: Error: ${err.message}`);
    });
  }

  public async start() {
    if (!this.DB_CONNECTION) {
      await mongoose.connect(this.DB_URI, {
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });
      this.DB_CONNECTION = mongoose.connection;
    }
  }

  public async close() {
    this.DB_CONNECTION?.close();
  }
}

export default Database;
