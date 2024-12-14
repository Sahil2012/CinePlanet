'use client';
import { Flex, Button, Grid, AlertDialog } from "@radix-ui/themes"
import { useState } from "react";

interface SeatArrangementProps {
	rows: number;
	columns: number;
	seats: string[][];
	setSeat: (row: number, column: number, state: string) => void;
}

const SeatArrangement = ({ rows, columns, seats, setSeat }: SeatArrangementProps) => {
	const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
	const [error, setError] = useState<boolean>(false);
	return(
		<>
			<Grid gap={'2'} rows={(rows).toString()}>
				{seats.map((seatRow: string[], rindex: number) => {
					return (<Grid className="w-full items-center" gap={'2'} key={String.fromCharCode(rindex+65)} columns={(columns+1).toString()}>
						<div className="text-center font-semibold text-xl">{String.fromCharCode(65+rindex)}</div>
						{seatRow.map((seat: string, cindex: number) => {
							if (seat === "NA"){ 
								return (
									<div key={seat+String.fromCharCode(rindex+65)+cindex}></div>
								)
							}
							return (
								<Button style={{minWidth: "3rem", minHeight: "1.5rem"}} key={seat+String.fromCharCode(rindex+65)+cindex} onClick={() => {
									if (selectedSeats.includes(String.fromCharCode(rindex+65)+cindex)) {
										setSelectedSeats(selectedSeats.filter((seat: string) => seat !== String.fromCharCode(rindex+65)+cindex));
										setSeat(rindex, cindex, "AVAILABLE"); 
									} else if (selectedSeats.length > 7) {
										setError(true);
									} else {
										setSelectedSeats([...selectedSeats, String.fromCharCode(rindex+65)+cindex]);
										setSeat(rindex, cindex, "BLOCKED"); 
									}
								}} disabled={seats[rindex][cindex] === "BOOKED"}>
									{
										seats[rindex][cindex] === "BOOKED"? 
											"Booked": 
										seats[rindex][cindex] === "BLOCKED"? 
											selectedSeats.indexOf(String.fromCharCode(rindex+65)+cindex)+1: 
											""
									}
								</Button>
							)
						})}
					</Grid>)
				})}
			</Grid>
			<AlertDialog.Root open={error} onOpenChange={() => { setError(false) }}>
				<AlertDialog.Content maxWidth="32rem">
					<AlertDialog.Title>Error</AlertDialog.Title>
					<AlertDialog.Description size="2">
						Cannot selected more than 8 seats
					</AlertDialog.Description>
					<AlertDialog.Cancel>
						<Flex direction="row-reverse" className="justify-end w-full">
							<Button className="self-end" variant="soft" color="red">
								Okay
							</Button>
						</Flex>
					</AlertDialog.Cancel>
				</AlertDialog.Content>
			</AlertDialog.Root>
		</>
	)
}

export default SeatArrangement;

