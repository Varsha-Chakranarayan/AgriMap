import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Farmer } from '../models/farmer.model';
import { FarmerService } from '../services/farmer.service';

@Component({
  selector: 'app-farmer-map',
  templateUrl: './farmer-map.component.html',
  styleUrls: ['./farmer-map.component.css'],
})
export class FarmerMapComponent {
  mapCenter = { lat: 20.5937, lng: 78.9629 }; // Center of India or default view

  farmers: Farmer[] = [];
  center: google.maps.LatLngLiteral = { lat: 20.5937, lng: 78.9629 };
  zoom = 5;
  mapLoaded = false;
  selectedFarmer: Farmer | null = null;

  uploadMessage: string = '';
  uploadSuccess: boolean = false;

  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;

  @ViewChildren(MapMarker) markerRefs!: QueryList<MapMarker>;

  constructor(private farmerService: FarmerService) {}

  onMapReady(event: any): void {
    this.mapLoaded = true;
  }

  selectFarmer(farmer: Farmer): void {
    this.selectedFarmer = farmer;
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (!file) return;

    const validExtensions = ['.xls', '.xlsx'];
    const fileExtension = file.name.substring(file.name.lastIndexOf('.'));
    if (!validExtensions.includes(fileExtension)) {
      this.uploadMessage =
        'Invalid file type. Please upload an .xls or .xlsx file.';
      this.uploadSuccess = false;
      return;
    }

    this.farmerService
      .parseExcel(file)
      .then((parsedFarmers) => {
        this.farmers = parsedFarmers;
        this.uploadMessage = 'File uploaded and farmers loaded successfully!';
        this.uploadSuccess = true;
        if (this.farmers.length > 0) {
          this.mapCenter = {
            lat: this.farmers[0].Latitude,
            lng: this.farmers[0].Longitude,
          };
        }
      })
      .catch(() => {
        this.uploadMessage = 'Error processing the file.';
        this.uploadSuccess = false;
      });
  }

  onMarkerClick(farmer: Farmer, marker: MapMarker) {
    this.selectedFarmer = farmer;
    this.infoWindow.open(marker);
  }
}
