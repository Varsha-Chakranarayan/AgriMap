import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { Farmer } from '../models/farmer.model';

@Injectable({
  providedIn: 'root',
})
export class FarmerService {
  parseExcel(file: File): Promise<Farmer[]> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const sheet = workbook.Sheets[workbook.SheetNames[0]];
          const json = XLSX.utils.sheet_to_json(sheet);
          const farmers = json.map((f: any) => ({
            ...f,
            name: f['Farmer Name']?.toString().trim() || '',
            latitude: +f['Latitude'],
            longitude: +f['Longitude'],
          }));
          resolve(farmers);
        } catch (error) {
          reject(error);
        }
      };
      reader.readAsArrayBuffer(file);
    });
  }
}
