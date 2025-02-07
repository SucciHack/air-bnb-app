"use client"
import React from "react";
import Link from "next/link";

import {
  Calendar,
  CalendarCheck,
  Check,
  CircleEllipsis,
  History,
  LucideIcon,
  RefreshCcw,
  Star,
  Stethoscope,
  Users,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Avatar,  AvatarImage } from "@/components/ui/avatar";

export interface PatientProps {
  patientId: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  gender: string;
  occupation: string;
  dob: string;
}
export type DoctorAnalyticsProps = {
  title: string;
  count: number;
  icon: LucideIcon;
  unit: string;
  detailLink: string;
};
enum AppointmentStatus {
  pending = "pending",
  rejected = "rejected",
  approved = "approved",
}

enum PaymentStatus {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILDED = "FAILDED",
}
export default function SidebarV1() {
  const analytics: DoctorAnalyticsProps[] = [
    {
      title: "Total Patients",
      count: 1234,
      icon: Users,
      unit: "",
      detailLink: "/analytics/patients",
    },
    {
      title: "Consultations",
      count: 156,
      icon: Stethoscope,
      unit: "",
      detailLink: "/analytics/consultations",
    },
    {
      title: "Appointments",
      count: 42,
      icon: Calendar,
      unit: "",
      detailLink: "/analytics/appointments",
    },
    {
      title: "Rating",
      count: 4.8,
      icon: Star,
      unit: "",
      detailLink: "/analytics/ratings",
    },
  ];
  const appointments = [
    {
      id: "507f1f77bcf86cd799439011",
      appointmentDate: new Date("2024-11-15T10:30:00Z"),
      appointmentFormattedDate: "15 Nov 2024",
      doctorId: "507f1f77bcf86cd799439012",
      doctorName: "Dr. Sarah Johnson",
      patientId: "507f1f77bcf86cd799439013",
      charge: 150,
      appointmentTime: "10:30 AM",
      firstName: "John",
      lastName: "Doe",
      gender: "Male",
      phone: "+1234567890",
      email: "john.doe@email.com",
      dob: new Date("1990-05-15"),
      location: "New York, NY",
      appointmentReason: "Annual checkup and blood pressure monitoring",
      medicalDocuments: ["previous_report.pdf", "blood_work.pdf"],
      occupation: "Software Engineer",
      status: AppointmentStatus.approved,
      meetingLink: "https://zoom.us/j/123456789",
      meetingProvider: "zoom",
      transactionId: "txn_123456789",
      reference: "REF123456",
      paymentStatus: PaymentStatus.SUCCESS,
      paymentMethod: "credit_card",
      paidAmount: 150,
      sales: [],
      createdAt: new Date("2024-11-01T08:00:00Z"),
      updatedAt: new Date("2024-11-01T08:00:00Z"),
    },
    {
      id: "507f1f77bcf86cd799439014",
      appointmentDate: new Date("2024-11-16T14:15:00Z"),
      appointmentFormattedDate: "16 Nov 2024",
      doctorId: "507f1f77bcf86cd799439015",
      doctorName: "Dr. Michael Chen",
      patientId: "507f1f77bcf86cd799439016",
      charge: 200,
      appointmentTime: "2:15 PM",
      firstName: "Jane",
      lastName: "Smith",
      gender: "Female",
      phone: "+1987654321",
      email: "jane.smith@email.com",
      dob: new Date("1985-08-22"),
      location: "Los Angeles, CA",
      appointmentReason: "Chronic back pain consultation",
      medicalDocuments: ["mri_scan.pdf", "previous_treatments.pdf"],
      occupation: "Teacher",
      status: AppointmentStatus.pending,
      meetingLink: "",
      meetingProvider: "zoom",
      transactionId: "txn_987654321",
      reference: "REF987654",
      paymentStatus: PaymentStatus.PENDING,
      paymentMethod: "debit_card",
      paidAmount: null,
      sales: [],
      createdAt: new Date("2024-11-02T09:30:00Z"),
      updatedAt: new Date("2024-11-02T09:30:00Z"),
    },
    {
      id: "507f1f77bcf86cd799439017",
      appointmentDate: new Date("2024-11-17T11:00:00Z"),
      appointmentFormattedDate: "17 Nov 2024",
      doctorId: "507f1f77bcf86cd799439018",
      doctorName: "Dr. Emily Wilson",
      patientId: "507f1f77bcf86cd799439019",
      charge: 175,
      appointmentTime: "11:00 AM",
      firstName: "Robert",
      lastName: "Johnson",
      gender: "Male",
      phone: "+1122334455",
      email: "robert.johnson@email.com",
      dob: new Date("1978-12-03"),
      location: "Chicago, IL",
      appointmentReason: "Follow-up after surgery",
      medicalDocuments: [
        "surgery_report.pdf",
        "recovery_plan.pdf",
        "medication_list.pdf",
      ],
      occupation: "Accountant",
      status: AppointmentStatus.rejected,
      meetingLink: "",
      meetingProvider: "zoom",
      transactionId: null,
      reference: "REF112233",
      paymentStatus: PaymentStatus.FAILDED,
      paymentMethod: null,
      paidAmount: null,
      sales: [],
      createdAt: new Date("2024-11-03T10:15:00Z"),
      updatedAt: new Date("2024-11-03T10:15:00Z"),
    },
  ];

  const patients: PatientProps[] = [
    {
      patientId: "PT001",
      name: "Emma Thompson",
      email: "emma.thompson@email.com",
      phone: "+1-555-0123",
      location: "123 Park Avenue, New York, NY",
      gender: "Female",
      occupation: "Software Developer",
      dob: "1992-05-15",
    },
    {
      patientId: "PT002",
      name: "James Rodriguez",
      email: "james.r@email.com",
      phone: "+1-555-0124",
      location: "456 Beach Drive, Miami, FL",
      gender: "Male",
      occupation: "Chef",
      dob: "1988-09-23",
    },
    {
      patientId: "PT003",
      name: "Sarah Chen",
      email: "sarah.chen@email.com",
      phone: "+1-555-0125",
      location: "789 Tech Boulevard, San Francisco, CA",
      gender: "Female",
      occupation: "Marketing Manager",
      dob: "1995-12-07",
    },
    {
      patientId: "PT004",
      name: "Michael O'Connor",
      email: "michael.oc@email.com",
      phone: "+1-555-0126",
      location: "321 Lake Street, Chicago, IL",
      gender: "Male",
      occupation: "Teacher",
      dob: "1983-03-30",
    },
  ];

  const status = "APPROVED";
  return (
    <div className="">
      <div className="flex flex-col">
        <div className="flex min-h-screen w-full flex-col">
          <div className="px-8 py-4">
            <div className="flex items-center justify-between">
              <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight mb-3">
                Welcome, Dr. JB Web Developer
              </h1>
              <div className="">
                <button
                  className={cn(
                    "py-2 px-3 rounded-md text-xs flex items-center space-x-2",
                    status === "APPROVED"
                      ? "bg-green-500 text-white"
                      : status === "PENDING"
                      ? "bg-orange-400"
                      : "bg-red-500 text-white"
                  )}
                >
                  {status === "APPROVED" ? (
                    <Check />
                  ) : status === "PENDING" ? (
                    <RefreshCcw />
                  ) : (
                    <X />
                  )}

                  {status}
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
              {analytics.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Card key={i}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        {item.title}
                      </CardTitle>
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {item.unit}
                        {item.count.toString().padStart(2, "0")}
                      </div>
                      <Link
                        href={item.detailLink}
                        className="text-xs text-muted-foreground"
                      >
                        View Details
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="grid gap-4 md:gap-8 lg:grid-cols-2 grid-cols-1 ">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Recent Appointments</CardTitle>
                    <Button asChild>
                      <Link href="/dashboard/doctor/appointments">
                        View All
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-4">
                  {appointments &&
                    appointments.slice(0, 5).map((item) => {
                      return (
                        <Link
                          key={item.id}
                          href={`/dashboard/doctor/appointments/view/${item.id}`}
                          className={
                            "border mb-2 border-gray-300 shadow-sm text-xs bg-white py-3 px-2 inline-block w-full rounded-md dark:text-slate-900"
                          }
                        >
                          <div className="flex justify-between items-center pb-2">
                            <h2>
                              {item.firstName} {item.lastName}
                            </h2>
                            <div className="flex items-center ">
                              <History className="w-4 h-4 mr-2" />
                              <span>2m ago</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center font-semibold">
                              <CalendarCheck className="w-4 h-4 mr-2" />
                              <span>{item.appointmentFormattedDate}</span>
                            </div>
                            <span className="font-semibold">
                              {item.appointmentTime}
                            </span>
                            <div
                              className={cn(
                                "flex items-center text-blue-600",
                                item.status === "approved" &&
                                  "text-green-600 font-semibold"
                              )}
                            >
                              {item.status === "pending" ? (
                                <CircleEllipsis className="mr-2 w-4 h-4" />
                              ) : item.status === "approved" ? (
                                <Check className="mr-2 w-4 h-4" />
                              ) : (
                                <X className="mr-2 w-4 h-4" />
                              )}
                              <span>{item.status}</span>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Recent Patients</CardTitle>
                    <Button asChild>
                      <Link href="/dashboard/doctor/patients">View All</Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-8">
                  {patients &&
                    patients.slice(0, 5).map((patient) => {
                      return (
                        <div
                          key={patient.email}
                          className="flex items-center gap-4"
                        >
                          <Avatar className="hidden h-9 w-9 sm:flex">
                            <AvatarImage src={""} alt="Avatar" />
                          </Avatar>
                          <div className="grid gap-1">
                            <p className="text-sm font-medium leading-none">
                              {patient.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {patient.email}
                            </p>
                          </div>
                          <div className="ml-auto font-medium flex space-x-2 items-center">
                            <Button size={"sm"} asChild variant={"outline"}>
                              <Link
                                href={`/dashboard/doctor/patients/view/${patient.patientId}`}
                              >
                                View
                              </Link>
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
